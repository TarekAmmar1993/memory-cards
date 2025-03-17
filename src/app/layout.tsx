import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Memory Cards',
  description: 'learn new skills with memory cards',
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
