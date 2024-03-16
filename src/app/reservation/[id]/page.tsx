'use client';
import { dummyExhibitionList } from '@/assets/dummy/exhibitionList';
import styles from '@/app/reservation/[id]/reservation.module.css';
import Link from 'next/link';
import { IoMdStar } from 'react-icons/io';
import { IoIosStarOutline } from 'react-icons/io';
export default function Reservation({ params: { id } }: { params: { id: string } }) {
  const exhibition = dummyExhibitionList.find((exhibition) => exhibition.id === parseInt(id));

  if (!exhibition) {
    return <h1>전시회를 찾을 수 없습니다.</h1>;
  }

  const handleClick = () => {
    if (window.confirm('티켓을 예매 하시겠습니까? 예매내역은 이메일로 전송됩니다.')) {
      alert('예매가 완료되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <div className={styles.reservation}>
      <Link href="/">예매하기</Link>
      <img alt="오류" src={exhibition.imageUrl} />
      <h1>{exhibition.title}</h1>

      <p>가격: {exhibition.price}원</p>
      <div>{exhibition.place}</div>
      <p>{exhibition.date.started}</p>
      <p>{exhibition.date.ended}</p>
      <div>
        <IoMdStar />
      </div>
      <button onClick={handleClick}>예매 하기</button>
    </div>
  );
}

// 'use client';
// import { getDetailExhibition } from '@/apis/index';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { add, remove, Exhibition } from '@/redux/store';
// import styles from '@/app/reservation/[id]/reservation.module.css';
// import Link from 'next/link';
// import { IoMdStar } from 'react-icons/io';
// import { IoIosStarOutline } from 'react-icons/io';

// const Reservation: React.FC<{ id: number }> = ({ id }) => {
//   // id props로 받음
//   const dispatch = useDispatch();
//   const favorites = useSelector((state: Exhibition[]) => state);
//   const [exhibition, setExhibition] = useState<Exhibition | null>(null); // 전시회 상태 추가

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getDetailExhibition({ id }); // 상세 불러오기 API 호출
//         setExhibition(response);
//       } catch (error) {
//         console.error('전시회를 불러오는 중 오류가 발생했습니다:', error);
//       }
//     };
//     fetchData();
//   }, [id]); // id가 변경될 때마다 실행

//   if (!exhibition) {
//     return <h1>전시회를 불러오는 중입니다...</h1>; // 데이터를 로딩하는 동안 로딩 메시지 표시
//   }

//   const isFavorite = favorites.some((fav: Exhibition) => fav.id === exhibition.id);

//   const handleStarClick = () => {
//     if (isFavorite) {
//       dispatch(remove(exhibition.id));
//     } else {
//       dispatch(add(exhibition));
//     }
//   };

//   const handleClick = () => {
//     if (window.confirm('티켓을 예매 하시겠습니까? 예매내역은 이메일로 전송됩니다.')) {
//       alert('예매가 완료되었습니다.');
//     } else {
//       alert('취소되었습니다.');
//     }
//   };

//   return (
//     <div className={styles.reservation}>
//       <Link href="/">예매하기</Link>
//       <img alt="오류" src={exhibition.imageUrl} />
//       <h1>{exhibition.title}</h1>

//       <p>가격: {exhibition.price}원</p>
//       <div>{exhibition.place}</div>
//       <p>{exhibition.date.started}</p>
//       <p>{exhibition.date.ended}</p>
//       <div>
//         <div onClick={handleStarClick}>{isFavorite ? <IoIosStarOutline /> : <IoMdStar />}</div>
//       </div>
//       <button onClick={handleClick}>예매 하기</button>
//     </div>
//   );
// };

// export default Reservation;
