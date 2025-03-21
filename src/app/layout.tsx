import './globals.css';

import type { Metadata } from 'next';
import { Poppins, Titillium_Web } from 'next/font/google';

import { Providers } from './providers';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const titillium = Titillium_Web({ subsets: ['latin'], weight: ['600'] });

export const metadata: Metadata = {
    title: 'MDA402 Project Management'
};

const RootLayout = async ({
                              children
                          }: Readonly<{
    children: React.ReactNode;
}>) => {
    
    return (
        <html lang="en">
            <body
                className={`flex min-h-screen flex-col bg-[#e30601] ${titillium.className}`}
            >
                <main className="container">
                    <Providers>{children}</Providers>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;