# Vercel Deployment Guide for I-vene Project

## Quick Deploy with Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

Follow the prompts and the CLI will guide you through the deployment.

## Environment Variables Setup

After deployment, add these environment variables in the Vercel dashboard:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZW5kbGVzcy1ncmFja2xlLTMyLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_btOGKXeyXR0L2H8cHv1lwn1somBdFYuJu03X4gqNBW
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_DRIZZLE_DB_URL=postgresql://neondb_owner:npg_utH38LGWKxBD@ep-summer-mouse-adwj629l-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyCrxtnQm6RvaI_ZH9Xl1QQSmILRQzOMQR8
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
NEXT_PUBLIC_INFO=Enable Video Cam and Microphone (prefer to wear Headphones for smooth experience) to Start your AI Generated Mock Interview. It has 5 Questions which you can answer and at last you will get the report on the basis of your Answer. Note: We never record your video or audio. It is just for the purpose of AI Generated Mock Interview.
NEXT_PUBLIC_QUESTION_NOTE=Click on Record Answer when you want to answer the question. At the end of interview we will give you the feedback along with correct answer for each question and your answer to compare it.
```

## Post-Deployment Steps

### 1. Update Clerk Domain Settings
- Go to [Clerk Dashboard](https://dashboard.clerk.com/)
- Navigate to your application
- Add your Vercel domain to allowed domains

### 2. Verify Database Connection
- Ensure Neon database allows connections from Vercel IPs (usually enabled by default)

### 3. Test Your Deployment
- Visit your deployed URL
- Test authentication flow
- Test interview creation and recording features

## Troubleshooting

### Build Errors
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`

### Environment Variable Issues
- Verify all env vars are added in Vercel dashboard
- Redeploy after adding env vars

### Database Connection Issues
- Check Neon database is active
- Verify connection string is correct
- Ensure SSL mode is properly configured

## Useful Commands

```bash
# Check deployment status
vercel list

# View deployment logs
vercel logs <deployment-url>

# Remove a deployment
vercel remove <deployment-name>
```
