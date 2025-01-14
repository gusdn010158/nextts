// 'use client';
// import { useEffect, useState } from 'react';
// import { Exhibition } from '@/redux/store';
// import Item from './Item/Item.tsx';
// import { getApiExhibitionList } from '../apis/index.ts';

// import styles from '../app/main.module.css';

// const Home: React.FC<Exhibition> = () => {
//   const [exhibitionList, setExhibitionList] = useState<Exhibition[]>([]);

//   useEffect(() => {
//     getApiExhibitionList()
//       .then((exhibitionList) => {
//         setExhibitionList(exhibitionList);
//       })
//       .catch((error) => {
//         console.error('API 호출 중 오류 발생:', error);
//       });
//   }, []);

//   return (
//     <>
//       <div className={styles.main}>
//         <div className={styles.maincomponent}>
//           {exhibitionList.map((exhibition, index) => (
//             <Item key={index} exhibition={exhibition} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Home;
'use client';
import { useEffect, useState } from 'react';
import { Exhibition } from '@/redux/store'; // Exhibition 타입이 정의되어 있어야 합니다.
import Item from './Item/Item.tsx';
import { getApiExhibitionList } from '../apis/index.ts';

import styles from '../app/main.module.css';

const Home: React.FC = () => {
  // 'Exhibition' 타입을 props로 사용하지 않으면 이렇게 선언
  const [exhibitionList, setExhibitionList] = useState<Exhibition[]>([]); // 상태로 'Exhibition' 배열을 관리

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
