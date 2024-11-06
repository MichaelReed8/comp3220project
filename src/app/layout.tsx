// src/app/layout.tsx
import React from 'react';
import Header from '../components/Header';
import './globals.css'; // Optional: Import global styles if needed

export const metadata = {
    title: 'Home Run',
    description: 'Find your dream home',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/HomeRun.svg" type="image/svg+xml"></link>
            </head>
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}