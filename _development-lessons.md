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