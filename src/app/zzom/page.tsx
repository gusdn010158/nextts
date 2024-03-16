'use client';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../main.module.css';
import { remove, Exhibition } from '@/redux/store';
import Link from 'next/link';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';

const zzom: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: Exhibition[]) => state);
  const isFavorite = favorites.some((fav: Exhibition) => fav === exhibition);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
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
            <div onClick={() => handleRemove(exhibition.id)}>
              <IoMdStar />
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default zzom;
