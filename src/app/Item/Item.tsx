import Link from 'next/link';
import styles from '../main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, removeid, Exhibition } from '../../redux/store';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';
import Itemcom from './Itemcom';

const Item: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: Exhibition[]) => state);

  const isFavorite = favorites.some((fav: Exhibition) => fav.id === exhibition.id);
  //some()매서드는 주어진 function을 하나라도 통과하는 배열의 element가 있으면 true를 반환하고 그렇지 않으면 false를 반환

  const handleStarClick = () => {
    if (isFavorite) {
      dispatch(removeid(exhibition.id));
    } else {
      dispatch(add(exhibition));
    }
  };

  return (
    <div className={styles.component}>
      <Itemcom exhibition={exhibition} />
      <div className={styles.Itembottom}>
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
// import Link from 'next/link';
// import styles from '../main.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { add, removeid, Exhibition } from '../../redux/store';
// import { IoMdStar } from 'react-icons/io';
// import { IoIosStarOutline } from 'react-icons/io';
// import Itemcom from './Itemcom';

// const Item: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state: { favorites: Exhibition[] }) => state.favorites) || []; // 기본값 추가

//   const isFavorite = favorites.some((fav: Exhibition) => fav.id === exhibition.id);

//   const handleStarClick = () => {
//     if (isFavorite) {
//       dispatch(removeid(exhibition.id));
//     } else {
//       dispatch(add(exhibition));
//     }
//   };

//   return (
//     <div className={styles.component}>
//       <Itemcom exhibition={exhibition} />
//       <div className={styles.Itembottom}>
//         <div className={styles.right} onClick={handleStarClick}>
//           {isFavorite ? <IoMdStar /> : <IoIosStarOutline />}
//         </div>
//         <Link href={`/reservation/${exhibition.id}`} className={styles.button}>
//           예매 하기
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Item;
