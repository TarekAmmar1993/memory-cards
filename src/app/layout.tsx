import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import '../index.css';
import { SidebarProvider } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'Memory Cards',
  description: 'learn new skills with memory cards',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Memory Cards</title>
      </head>
      <body>
        <div id="root">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
