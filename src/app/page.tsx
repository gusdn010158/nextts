'use client';
import { useEffect, useState } from 'react';
import { Exhibition } from '@/redux/store';
import Item from './Item/Item.tsx';
import { getApiExhibitionList } from '../apis/index.ts';

import styles from '../app/main.module.css';

const Home: React.FC<Exhibition> = () => {
  const [exhibitionList, setExhibitionList] = useState<Exhibition[]>([]);

  useEffect(() => {
    getApiExhibitionList()
      .then((exhibitionList) => {
        setExhibitionList(exhibitionList);
      })
      .catch((error) => {
        console.error('API 호출 중 오류 발생:', error);
      });
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.maincomponent}>
          {exhibitionList.map((exhibition, index) => (
            <Item key={index} exhibition={exhibition} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
