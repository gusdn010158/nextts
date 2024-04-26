'use client';
import styles from '@/app/reservation/[id]/reservation.module.css';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import Reservation from './Reservation';
import React from 'react';

export default function Page({ params: { id } }: { params: { id: string } }) {
  const handleClick = () => {
    if (window.confirm('티켓을 예매 하시겠습니까? 예매내역은 이메일로 전송됩니다.')) {
      alert('예매가 완료되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <div className={styles.reservation}>
      <div className={styles.reservationin}>
        <div className={styles.reLink}>
          <BsArrowLeft />
          <Link href="/">예매하기</Link>
        </div>

        <Reservation id={id} />
        <button className={styles.rebu} onClick={handleClick}>
          예매 하기
        </button>
      </div>
    </div>
  );
}
