'use client';
import { dummyExhibitionList } from '@/assets/dummy/exhibitionList';
import styles from '@/app/reservation/[id]/reservation.module.css';
import Link from 'next/link';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';
export default function Reservation({ params: { id } }: { params: { id: string } }) {
  const exhibition = dummyExhibitionList.find((exhibition) => exhibition.id === parseInt(id));

  if (!exhibition) {
    return <h1>전시회를 찾을 수 없습니다.</h1>;
  }

  const { title, price } = exhibition;
  const handleClick = () => {
    if (window.confirm('티켓을 예매 하시겠습니까? 예매내역은 이메일로 전송됩니다.')) {
      alert('예매가 완료되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <div className={styles.reservation}>
      <Link href="/">예매하기</Link>
      <img alt="오류" src={exhibition.imageUrl} />
      <h1>{title}</h1>

      <p>가격: {price}원</p>
      <div>{exhibition.place}</div>
      <p>{exhibition.date.started}</p>
      <p>{exhibition.date.ended}</p>
      <div>
        <IoMdStar />
      </div>
      <button onClick={handleClick}>예매 하기</button>
    </div>
  );
}
