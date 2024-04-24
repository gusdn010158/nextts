'use client';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../main.module.css';
import { removeid, Exhibition } from '@/redux/store';
import Link from 'next/link';
import { IoMdStar } from 'react-icons/io';

const zzom: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: Exhibition[]) => state);

  const handleRemove = (id: number) => {
    dispatch(removeid(id));
  };
  return (
    <div className={styles.main}>
      {favorites.length === 0 ? (
        <div>찜 해놓은 전시회가 없습니다.</div>
      ) : (
        favorites.map((exhibition: Exhibition) => (
          <div className={styles.zzom} key={exhibition.id}>
            <img alt="오류" src={exhibition.imageUrl} />
            <div className={styles.componentdiv}>
              <div className={styles.component1}>{exhibition.title}</div>
              <div className={styles.component2}>{exhibition.place}(장소이름)</div>
              <div className={styles.component3}>{exhibition.price}원</div>
              <Link href={`/reservation/${exhibition.id}`} className={styles.button}>
                예매 하기
              </Link>
            </div>

            <div className={styles.Itembottom}>
              <div className={styles.right} onClick={() => handleRemove(exhibition.id)}>
                <IoMdStar />
              </div>
              <div className={styles.component4}>
                {exhibition.date.started}~{exhibition.date.ended}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default zzom;
