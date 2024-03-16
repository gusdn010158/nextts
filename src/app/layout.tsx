import type { Metadata } from 'next';
import styles from '../app/main.module.css';
import { Root } from './App';
import { IoMdStar } from 'react-icons/io';
import { FaTicketAlt } from 'react-icons/fa';
import Link from 'next/link';
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
          <div className={styles.bottom}>
            <div className={styles.bottomcomp}>
              <div>
                <FaTicketAlt />
                <Link href="/">전시회</Link>
              </div>
              <div>
                <IoMdStar />
                <Link href="/zzom">찜목록</Link>
              </div>
            </div>
          </div>
        </Root>
      </body>
    </html>
  );
}
