import type { Metadata } from 'next';

import { Root } from './App';
import Bottom from './Bottom/Bottom';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Root>
          {children}
          <Bottom />
        </Root>
      </body>
    </html>
  );
}
