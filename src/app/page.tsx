'use client';
import { useEffect, useState } from 'react';

import Item from './Item';
import { getApiExhibitionList } from '../apis/index.ts';
import { IoMdStar } from 'react-icons/io';
import { FaTicketAlt } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../app/main.module.css';
type Exhibition = {
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  id: number;
};

export default function Home() {
  const [exhibitionList, setExhibitionList] = useState<Exhibition[]>([]);

  useEffect(() => {
    // API 호출
    getApiExhibitionList()
      .then((exhibitionList: Exhibition[]) => {
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
    </>
  );
}
