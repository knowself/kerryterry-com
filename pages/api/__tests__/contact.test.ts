import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import handler from '../contact';

// Mock SendGrid
jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn(),
}));

describe('Contact API Handler', () => {
  let mockReq: Partial<NextApiRequest>;
  let mockRes: Partial<NextApiResponse>;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Mock response methods
    jsonMock = jest.fn();
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jsonMock,
    };

    // Mock environment variables
    process.env.SENDGRID_API_KEY = 'mock_api_key';
    process.env.CONTACT_FROM_EMAIL = 'from@example.com';
    process.env.CONTACT_TO_EMAIL = 'to@example.com';
    process.env.AUTO_RESPONSE_ENABLED = 'true';
  });

  it('should return 405 for non-POST requests', async () => {
    mockReq = { method: 'GET' };
    await handler(mockReq as NextApiRequest, mockRes as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(405);
    expect(jsonMock).toHaveBeenCalledWith({ message: 'Method not allowed' });
  });

  it('should return 400 for invalid input', async () => {
    mockReq = {
      method: 'POST',
      body: {
        name: 'a', // too short
        email: 'invalid-email',
        phone: '123', // invalid phone
        message: 'short', // too short
        preferredContact: 'invalid',
        studentType: 'invalid',
      },
    };

    await handler(mockReq as NextApiRequest, mockRes as NextApiResponse);
    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Invalid input',
        errors: expect.any(Array),
      })
    );
  });

  it('should successfully send emails for valid input', async () => {
    const validBody = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '123-456-7890',
      message: 'This is a test message that is long enough.',
      preferredContact: 'email',
      studentType: 'beginner',
    };

    mockReq = {
      method: 'POST',
      body: validBody,
    };

    // Mock successful email sending
    (sgMail.send as jest.Mock).mockResolvedValueOnce([
      { statusCode: 202, headers: {}, body: {} },
      {},
    ]);

    await handler(mockReq as NextApiRequest, mockRes as NextApiResponse);

    // Verify SendGrid was called correctly
    expect(sgMail.send).toHaveBeenCalledTimes(2); // Once for notification, once for auto-response
    expect(sgMail.send).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'from@example.com',
        to: 'to@example.com',
        subject: expect.stringContaining('Test User'),
        html: expect.stringContaining('Test User'),
      })
    );

    // Verify response
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({ message: 'Message sent successfully' });
  });

  it('should handle SendGrid errors appropriately', async () => {
    mockReq = {
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '123-456-7890',
        message: 'This is a test message that is long enough.',
        preferredContact: 'email',
        studentType: 'beginner',
      },
    };

    // Mock SendGrid error
    const mockError = new Error('SendGrid error');
    (mockError as any).code = 'EENVELOPE';
    (mockError as any).response = {
      body: { errors: [{ message: 'Invalid recipient' }] },
    };
    (sgMail.send as jest.Mock).mockRejectedValueOnce(mockError);

    await handler(mockReq as NextApiRequest, mockRes as NextApiResponse);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Error sending message',
        details: expect.stringContaining('SendGrid error'),
      })
    );
  });

  it('should skip auto-response when disabled', async () => {
    process.env.AUTO_RESPONSE_ENABLED = 'false';
    
    mockReq = {
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '123-456-7890',
        message: 'This is a test message that is long enough.',
        preferredContact: 'email',
        studentType: 'beginner',
      },
    };

    // Mock successful email sending
    (sgMail.send as jest.Mock).mockResolvedValueOnce([
      { statusCode: 202, headers: {}, body: {} },
      {},
    ]);

    await handler(mockReq as NextApiRequest, mockRes as NextApiResponse);

    // Verify SendGrid was called only once (no auto-response)
    expect(sgMail.send).toHaveBeenCalledTimes(1);
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });
});
