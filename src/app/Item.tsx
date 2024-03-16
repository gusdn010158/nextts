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

  const handleStarClick = () => {
    if (isFavorite) {
      dispatch(remove(exhibition.id));
    } else {
      dispatch(add(exhibition));
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
