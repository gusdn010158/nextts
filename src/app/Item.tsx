// import Link from 'next/link';
// import styles from '../app/main.module.css';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux'; // useDispatch 추가
// import { addToFavorites, removeFromFavorites, Exhibition } from '../redux/store'; // 스토어 및 관련 액션 임포트
// import { IoMdStar } from 'react-icons/io';
// import { IoIosStarOutline } from 'react-icons/io';
// const Item: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
//   const [star, setStar] = useState(false);
//   const dispatch = useDispatch(); // useDispatch 훅 사용

//   const handleStarClick = () => {
//     setStar((prevStar) => !prevStar);
//     if (!star) {
//       dispatch(addToFavorites(exhibition)); // 찜하기 버튼 클릭 시 스토어에 추가
//     } else {
//       dispatch(removeFromFavorites(exhibition.id)); // 찜하기 취소 버튼 클릭 시 스토어에서 제거
//     }
//   };

//   return (
//     <div className={styles.component}>
//       <img alt="오류" src={exhibition.imageUrl} />
//       <div>
//         <div>{exhibition.title}</div>
//         <div>{exhibition.place}(장소이름)</div>
//         <div>{exhibition.price}원</div>
//       </div>
//       <div>
//         <div className={styles.right} onClick={handleStarClick}>
//           {star ? <IoMdStar /> : <IoIosStarOutline />}
//         </div>
//         <Link href={`/reservation/${exhibition.id}`} className={styles.button}>
//           예매 하기
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Item;

import Link from 'next/link';
import styles from '../app/main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, Exhibition } from '../redux/store';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';

const Item: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: Exhibition[]) => state);

  const isFavorite = favorites.some((fav: Exhibition) => fav.id === exhibition.id);

  // onClick 핸들러를 Redux 스토어로 변경
  const handleStarClick = () => {
    if (isFavorite) {
      dispatch(remove(exhibition.id)); // 이미 찜된 상태이면 제거
    } else {
      dispatch(add(exhibition)); // 찜하기 버튼 클릭 시 스토어에 추가
    }
  };

  return (
    <div className={styles.component}>
      <img alt="오류" src={exhibition.imageUrl} />
      <div>
        <div>{exhibition.title}</div>
        <div>{exhibition.place}(장소이름)</div>
        <div>{exhibition.price}원</div>
      </div>
      <div>
        <div className={styles.right} onClick={handleStarClick}>
          {isFavorite ? <IoMdStar /> : <IoIosStarOutline />}
        </div>
        <Link href={`/reservation/${exhibition.id}`} className={styles.button}>
          예매 하기
        </Link>
      </div>
    </div>
  );
};

export default Item;
