import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Layout from '../components/Layout';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[\d\s-()]{10,}$/, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['email', 'phone']),
  studentType: z.enum(['beginner', 'intermediate', 'advanced', 'parent']),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputStyles = "w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-brown focus:border-transparent transition";
const labelStyles = "block text-sm font-medium text-gray-700 mb-1";
const errorStyles = "mt-1 text-sm text-red-600";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout 
      title="Contact | Kerry Terry Piano Lessons" 
      description="Contact Kerry Terry for piano lessons. Offering lessons for beginners to advanced students."
    >
      <div className="min-h-screen pt-16 animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-eb-garamond font-medium text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your musical journey? I'd love to hear from you and discuss how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-eb-garamond font-medium text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                    <a 
                      href="mailto:kerry@kerryterry.com" 
                      className="text-brown hover:text-brown/80 transition"
                    >
                      kerry@kerryterry.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Availability</h3>
                    <p className="text-gray-600">
                      Lessons are available Monday through Friday. 
                      New students are always welcome!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className={labelStyles}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-brown focus:border-transparent transition ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && (
                    <p className={errorStyles}>{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelStyles}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-brown focus:border-transparent transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className={errorStyles}>{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelStyles}>Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-brown focus:border-transparent transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className={errorStyles}>{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelStyles}>Preferred Contact Method *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="email"
                        {...register('preferredContact')}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="phone"
                        {...register('preferredContact')}
                        className="mr-2"
                      />
                      Phone
                    </label>
                  </div>
                  {errors.preferredContact && (
                    <p className={errorStyles}>{errors.preferredContact.message}</p>
                  )}
                </div>

                <div>
                  <label className={labelStyles}>Student Type *</label>
                  <select
                    {...register('studentType')}
                    className={`w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-brown focus:border-transparent transition ${
                      errors.studentType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="parent">Parent of Student</option>
                  </select>
                  {errors.studentType && (
                    <p className={errorStyles}>{errors.studentType.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={labelStyles}>Message *</label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-brown focus:border-transparent transition ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && (
                    <p className={errorStyles}>{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brown hover:bg-brown/90 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
