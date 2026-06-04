# Set Piece Solutions Website

Production-ready Next.js + Tailwind starter for https://setpiecesolution.com.

## Contact info already inserted

- Phone: (574) 440-0446
- Email: setpieceproperties@gmail.com
- Domain: https://setpiecesolution.com

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Upload the contents of this folder to GitHub. Do not upload the parent ZIP folder.
2. In Vercel, click Add New > Project.
3. Import the GitHub repo.
4. Confirm settings:
   - Framework Preset: Next.js
   - Build Command: npm run build
   - Install Command: npm install
   - Output Directory: leave blank
5. Deploy.

## Domain DNS

Add these records where the domain was purchased:

```txt
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

If Vercel shows a different CNAME target, use exactly what Vercel shows.

## Quote form

The quote form uses FormSubmit and sends to setpieceproperties@gmail.com.

After launch, submit one test form. FormSubmit may send a one-time activation email. Confirm it, then future quote requests should go to the inbox.
