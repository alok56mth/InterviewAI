# 🚨 IMPORTANT: Environment Setup

## Before Deployment

1. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Fill in your actual API keys in `.env`:**
   - Get Clerk key from: https://clerk.com/dashboard
   - Get Gemini API key from: https://aistudio.google.com/app/apikey
   - Get Firebase config from: https://console.firebase.google.com
   - Get EmailJS keys from: https://www.emailjs.com/

3. **For deployment platforms (Netlify/Vercel):**
   - Add all environment variables in platform dashboard
   - Never commit `.env` file to GitHub

## Security Note
- `.env` file is in `.gitignore` - your keys are safe
- Only `.env.example` goes to GitHub (without real keys)
- Always use environment variables for sensitive data