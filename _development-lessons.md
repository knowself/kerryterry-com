# Git & Deployment Rules

✅ ALWAYS
- Work from staging branch
```bash
git checkout staging
git pull origin staging
```

- Create feature branch
```bash
git checkout -b feature/your-feature-name
```

- Push to staging for testing
```bash
git checkout staging
git merge feature/your-feature-name
git push origin staging     # deploys to staging.kerryterry.com
```

- Get PR approval before master
```bash
# Create PR from staging to master in GitHub
# Wait for review and approval
```

✅ NEVER
- Push directly to master
- Skip staging tests
- Merge without PR review

# Email Service Migration (2024-12-15)

## Changes Made
- Migrated from Resend to SendGrid for email functionality
- Updated environment variables:
  - Removed: RESEND_API_KEY
  - Added: SENDGRID_API_KEY
- SendGrid Configuration Requirements:
  - Sender verification through domain or email required
  - API key must have necessary permissions for sending emails
  - Template system differs from Resend

## Best Practices
- Always verify sender email/domain in SendGrid dashboard
- Use SendGrid's event webhook for email tracking
- Implement proper error handling for SendGrid API responses
- Test email deliverability in sandbox mode first