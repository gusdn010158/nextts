// 'use client';
// import React from 'react';
// import styles from '@/app/reservation/[id]/reservation.module.css';
// import { IoMdStar } from 'react-icons/io';
// import { IoIosStarOutline } from 'react-icons/io';

// import { dummyExhibitionList } from '@/assets/dummy/exhibitionList';

// import { useDispatch, useSelector } from 'react-redux';
// import { add, remove, Exhibition } from '@/redux/store';

// export default function Reservation({ id }: { id: string }) {
//   const exhibition = dummyExhibitionList.find((exhibition) => exhibition.id === parseInt(id));
//   const dispatch = useDispatch();
//   const favorites = useSelector((state: Exhibition[]) => state);
//   const isFavorite = favorites.some((fav: Exhibition) => fav === exhibition);
//   //some()매서드는 주어진 function을 하나라도 통과하는 배열의 element가 있으면 true를 반환하고 그렇지 않으면 false를 반환
//   if (!exhibition) {
//     return <h1>전시회를 찾을 수 없습니다.</h1>;
//   }

//   const handleStarClick = () => {
//     if (isFavorite) {
//       dispatch(remove(exhibition));
//     } else {
//       dispatch(add(exhibition));
//     }
//   };
//   return (
//     <>
//       <img className={styles.img} alt="오류" src={exhibition.imageUrl} />
//       <h1>{exhibition.title}</h1>

//       <h2 className={styles.ppp}> {exhibition.price}원</h2>

//       <div className={styles.resene}>
//         <div className={styles.divdiv}>
//           <div className={styles.divdiv}>{exhibition.place}</div>
//           {exhibition.date.started}~{exhibition.date.ended}
//         </div>
//         <div className={styles.divstar} onClick={handleStarClick}>
//           {isFavorite ? <IoMdStar /> : <IoIosStarOutline />}
//         </div>
//       </div>
//     </>
//   );
// }
'use client';
import React from 'react';
import styles from '@/app/reservation/[id]/reservation.module.css';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';

import { dummyExhibitionList } from '@/assets/dummy/exhibitionList';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, Exhibition } from '@/redux/store';

export default function Reservation({ id }: { id: string }) {
  const exhibition = dummyExhibitionList.find((exhibition) => exhibition.id === parseInt(id));
  const dispatch = useDispatch();
  const favorites = useSelector((state: { favorites: Exhibition[] }) => state.favorites);

  const isFavorite = favorites.some((fav: Exhibition) => fav.id === exhibition?.id);

  if (!exhibition) {
    return <h1>전시회를 찾을 수 없습니다.</h1>;
  }

  const handleStarClick = () => {
    if (isFavorite) {
      dispatch(remove(exhibition));
    } else {
      dispatch(add(exhibition));
    }
  };

  return (
    <>
      <img className={styles.img} alt="오류" src={exhibition.imageUrl} />
      <h1>{exhibition.title}</h1>
      <h2 className={styles.ppp}> {exhibition.price}원</h2>
      <div className={styles.resene}>
        <div className={styles.divdiv}>
          <div className={styles.divdiv}>{exhibition.place}</div>
          {exhibition.date.started}~{exhibition.date.ended}
        </div>
        <div className={styles.divstar} onClick={handleStarClick}>
          {isFavorite ? <IoMdStar /> : <IoIosStarOutline />}
        </div>
      </div>
    </>
  );
}
