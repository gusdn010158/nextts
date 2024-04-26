import React from 'react';
import styles from '../main.module.css';
import { Exhibition } from '../../redux/store';
const Itemcom: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
  return (
    <>
      <img alt="오류" src={exhibition.imageUrl} />
      <div className={styles.componentdiv}>
        <div className={styles.component1}>{exhibition.title}</div>
        <div className={styles.component2}>{exhibition.place}(장소이름)</div>
        <div className={styles.component3}>{exhibition.price}원</div>
        <div className={styles.component4}>
          {exhibition.date.started}~{exhibition.date.ended}
        </div>
      </div>
    </>
  );
};

export default Itemcom;
