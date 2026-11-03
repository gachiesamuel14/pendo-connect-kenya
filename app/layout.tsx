import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendo Connect Kenya',
  description: 'Location-based dating for people in Kenya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
