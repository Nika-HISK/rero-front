import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RecoilWrapper from './Components/RecoilWrapper/RecoilWrapper';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Rero',
  description: 'Musical website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} children`}>
        <RecoilWrapper>{children}</RecoilWrapper>
      </body>
    </html>
  );
}
