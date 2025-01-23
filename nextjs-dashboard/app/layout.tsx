// pnpm dev
// Email: user@nextmail.com
// Password: 123456

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from "@vercel/speed-insights/next"
// import {SERVER_PROPS_EXPORT_ERROR} from "next/dist/lib/constants";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | Acme Dashboard',
        default: 'Acme Dashboard',
    },
    description: 'The official Next.js Learn Dashboard built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

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
