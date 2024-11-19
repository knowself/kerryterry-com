import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

const resend = new Resend(process.env.RESEND_API_KEY);

// Enhanced validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(100),
  phone: z.string().regex(/^\+?[\d\s-()]{10,}$/, 'Please enter a valid phone number').max(20),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  preferredContact: z.enum(['email', 'phone']),
  studentType: z.enum(['beginner', 'intermediate', 'advanced', 'parent']),
});

// Sanitize HTML content
const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

// Email templates
const getNotificationEmailHtml = (data: z.infer<typeof contactSchema>) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h2 { color: #41a4b1; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; }
    .message { background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Contact Form Submission</h2>
    <div class="field">
      <span class="label">Name:</span> ${sanitizeInput(data.name)}
    </div>
    <div class="field">
      <span class="label">Email:</span> ${sanitizeInput(data.email)}
    </div>
    <div class="field">
      <span class="label">Phone:</span> ${sanitizeInput(data.phone)}
    </div>
    <div class="field">
      <span class="label">Preferred Contact Method:</span> ${data.preferredContact}
    </div>
    <div class="field">
      <span class="label">Student Level:</span> ${data.studentType}
    </div>
    <div class="message">
      <span class="label">Message:</span><br>
      ${sanitizeInput(data.message).replace(/\n/g, '<br>')}
    </div>
  </div>
</body>
</html>
`;

const getAutoResponseHtml = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h2 { color: #41a4b1; }
    .signature { margin-top: 30px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Thank You for Contacting Kerry Terry Piano</h2>
    <p>Dear ${sanitizeInput(name)},</p>
    <p>Thank you for your interest in piano lessons! I have received your message and will get back to you as soon as possible, usually within 24-48 hours.</p>
    <p>In the meantime, you can learn more about my teaching method and approach on my website.</p>
    <div class="signature">
      <p>Best regards,<br>Kerry Terry<br>Piano Instructor</p>
    </div>
  </div>
</body>
</html>
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate and parse input
    const result = contactSchema.safeParse(req.body);
    if (!result.success) {
      console.error('Validation error:', result.error.errors);
      return res.status(400).json({ 
        message: 'Invalid input',
        errors: result.error.errors 
      });
    }

    const data = result.data;
    console.log('Attempting to send email with data:', {
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      name: data.name,
      email: data.email
    });

    // Send notification email
    const emailResult = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New Piano Lesson Inquiry from ${sanitizeInput(data.name)}`,
      html: getNotificationEmailHtml(data),
    });
    
    console.log('Notification email result:', emailResult);

    // Send auto-response if enabled
    if (process.env.AUTO_RESPONSE_ENABLED === 'true') {
      const autoResponseResult = await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL!,
        to: data.email,
        subject: 'Thank You for Contacting Kerry Terry Piano',
        html: getAutoResponseHtml(data.name),
      });
      console.log('Auto-response email result:', autoResponseResult);
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    // Log the full error details
    console.error('Error processing contact form:', {
      error,
      stack: error instanceof Error ? error.stack : undefined,
      env: {
        fromEmail: process.env.CONTACT_FROM_EMAIL,
        toEmail: process.env.CONTACT_TO_EMAIL,
        autoResponse: process.env.AUTO_RESPONSE_ENABLED,
      }
    });
    res.status(500).json({ 
      message: 'Error sending message',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
