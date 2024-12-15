# Kerry Terry Piano Lessons

A modern, responsive website for Kerry Terry's piano teaching practice in Northern California. Built with Next.js 14, TypeScript, and Tailwind CSS.

## About

This website serves as the online presence for KerryTerry's piano teaching practice, providing:
- Information about her teaching philosophy and methods
- Details about lesson offerings
- Contact information for prospective students
- Student resources and materials

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image Component with Sharp
- **Development Tools**: ESLint, Prettier
- **Testing**: Jest and React Testing Library

## Development

1. Clone the repository:
   ```bash
   git clone git@github.com:knowself/kerryterry-com.git
   cd kerryterry-com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.template .env.development   # For development
   # or
   cp .env.template .env.production    # For production
   ```

2. Update environment variables:
   - For development:
     - Get a Resend API key from [Resend Dashboard](https://resend.com)
     - Use the Resend onboarding email or a verified sender
     - Update `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL`
   
   - For production:
     - Use production Resend API key
     - Use verified domain email addresses
     - Set variables in deployment platform (Vercel)

Required Environment Variables:
- `RESEND_API_KEY`: Your Resend API key
- `CONTACT_FROM_EMAIL`: Verified sender email
- `CONTACT_TO_EMAIL`: Recipient email for contact forms
- `NODE_ENV`: Set automatically by Next.js
- `AUTO_RESPONSE_ENABLED`: Enable/disable auto-responses

Note: Never commit `.env.*` files to version control. They contain sensitive information.

## Deployment Strategy

This project uses a two-branch strategy for development and deployment:

- `master` branch: Production environment
  - Automatically deploys to kerryterry.com
  - Contains stable, production-ready code
  - Protected branch, changes only through approved PRs

- `staging` branch: Development/Testing environment
  - Automatically deploys to staging.kerryterry.com
  - Used for active development and testing
  - New features and changes are developed here

### Workflow

1. All development work happens on the `staging` branch
2. Changes are deployed automatically to staging.kerryterry.com
3. After testing and approval, create a Pull Request from `staging` to `master`
4. Once PR is approved and merged, changes automatically deploy to kerryterry.com

### Branch Management

```bash
# Switch to staging branch for development
git checkout staging

# Create a new feature
git checkout -b feature/your-feature-name staging

# After feature is complete, merge back to staging
git checkout staging
git merge feature/your-feature-name

# Push changes to trigger staging deployment
git push origin staging
```

## Project Structure

```
├── components/     # Reusable React components
├── pages/         # Next.js pages and API routes
├── public/        # Static assets and images
├── styles/        # Global styles and Tailwind configuration
└── types/         # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run linting
- `npm run format` - Format code

## Deployment

The site is built for deployment on Vercel, optimized for:
- Server-side rendering
- Image optimization
- Edge functions
- API routes

## License

All Rights Reserved - Kerry Terry
