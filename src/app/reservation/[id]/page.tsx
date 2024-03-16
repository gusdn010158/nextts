'use client';
import { dummyExhibitionList } from '@/assets/dummy/exhibitionList';
import styles from '@/app/reservation/[id]/reservation.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { add, removeb, Exhibition } from '@/redux/store';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';
import { BsArrowLeft } from 'react-icons/bs';
export default function Reservation({ params: { id } }: { params: { id: string } }) {
  const exhibition = dummyExhibitionList.find((exhibition) => exhibition.id === parseInt(id));
  const dispatch = useDispatch();
  const favorites = useSelector((state: Exhibition[]) => state);
  const isFavorite = favorites.some((fav: Exhibition) => fav === exhibition);

  if (!exhibition) {
    return <h1>전시회를 찾을 수 없습니다.</h1>;
  }

  const handleClick = () => {
    if (window.confirm('티켓을 예매 하시겠습니까? 예매내역은 이메일로 전송됩니다.')) {
      alert('예매가 완료되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };
  const handleStarClick = () => {
    if (isFavorite) {
      dispatch(removeb(exhibition));
    } else {
      dispatch(add(exhibition));
    }
  };
  return (
    <div className={styles.reservation}>
      <div className={styles.reservationin}>
        <div className={styles.reLink}>
          <BsArrowLeft />
          <Link href="/">홈으로</Link>
        </div>
        <img alt="오류" src={exhibition.imageUrl} />
        <h1>{exhibition.title}</h1>

        <p>가격: {exhibition.price}원</p>
        <div>{exhibition.place}</div>
        <div className={styles.resene}>
          <div>
            {exhibition.date.started}~{exhibition.date.ended}
          </div>
          <div onClick={handleStarClick}>{isFavorite ? <IoMdStar /> : <IoIosStarOutline />}</div>
        </div>

        <button className={styles.rebu} onClick={handleClick}>
          예매 하기
        </button>
      </div>
    </div>
  );
}
