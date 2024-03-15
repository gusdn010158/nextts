'use client';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../main.module.css';
import { add, remove } from '@/redux/store';
import Link from 'next/link';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';

export type Exhibition = {
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  id: number;
};
const zzom: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: Exhibition[]) => state);

  // 해당 전시회가 favorites에 있는지 확인
  const isFavorite = favorites.some((fav: Exhibition) => fav.id === exhibition?.id);

  // onClick 핸들러를 Redux 스토어로 변경
  const handleStarClick = () => {
    if (isFavorite) {
      dispatch(remove(exhibition?.id)); // 이미 찜된 상태이면 제거
    } else {
      dispatch(add(exhibition));
    }
  };
  return (
    <div className={styles.main}>
      {favorites.length === 0 ? (
        <div>찜 해놓은 전시회가 없습니다.</div>
      ) : (
        favorites.map((exhibition: Exhibition) => (
          <div key={exhibition.id}>
            <img alt="오류" src={exhibition.imageUrl} />
            <div>{exhibition.title}</div>
            <div>{exhibition.place}(장소이름)</div>
            <div>{exhibition.price}원</div>
            <Link href={`/reservation/${exhibition.id}`} className={styles.button}>
              예매 하기
            </Link>
            <div onClick={handleStarClick}>{isFavorite ? <IoIosStarOutline /> : <IoMdStar />}</div>
          </div>
        ))
      )}
    </div>
  );
};
export default zzom;
