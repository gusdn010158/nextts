import Link from 'next/link';
import styles from '../app/main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, removeid, Exhibition } from '../redux/store';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';

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
      <img alt="오류" src={exhibition.imageUrl} />
      <div className={styles.componentdiv}>
        <div className={styles.component1}>{exhibition.title}</div>
        <div className={styles.component2}>{exhibition.place}(장소이름)</div>
        <div className={styles.component3}>{exhibition.price}원</div>
        <div className={styles.component4}>
          {exhibition.date.started}~{exhibition.date.ended}
        </div>
      </div>
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
