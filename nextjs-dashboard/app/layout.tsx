// pnpm dev
// http://localhost:3000/
// http://localhost:3000/dashboard

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from "@vercel/speed-insights/next"
// import {SERVER_PROPS_EXPORT_ERROR} from "next/dist/lib/constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
            <title>Next.js</title>
        </head>
        <body className={`${inter.className} antialiased`}>
            {children}
            <SpeedInsights />
        </body>
    </html>
  );
}
