import React from 'react';
import styles from '../main.module.css';
import { IoMdStar } from 'react-icons/io';
import { FaTicketAlt } from 'react-icons/fa';
import Link from 'next/link';
function Bottom() {
  return (
    <div className={styles.bottom}>
      <div className={styles.bottomcomp}>
        <div className={styles.Link}>
          <FaTicketAlt />
          <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
            전시회
          </Link>
        </div>
        <div className={styles.Link}>
          <IoMdStar />
          <Link href="/zzim" style={{ textDecoration: 'none', color: 'black' }}>
            찜목록
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
