import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Web site created with Next.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MemCards</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
