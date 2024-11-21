import React from 'react';
import Header from '../components/Header';
import './globals.css'; // Optional: Import global styles if needed

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

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
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <head>
          <link rel="icon" href="/HomeRun.svg" type="image/svg+xml" />
        </head>
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
