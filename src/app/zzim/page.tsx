'use client';
import { useSelector } from 'react-redux';
import styles from '../main.module.css';
import { Exhibition } from '@/redux/store';

import Zzim from './Zzim';

const zzom: React.FC<Exhibition> = () => {
  const favorites = useSelector((state: Exhibition[]) => state);

  return (
    <div className={styles.main}>
      {favorites.length === 0 ? (
        <div>찜 해놓은 전시회가 없습니다.</div>
      ) : (
        favorites.map((exhibition: Exhibition) => <Zzim exhibition={exhibition} />)
      )}
    </div>
  );
};
export default zzom;
