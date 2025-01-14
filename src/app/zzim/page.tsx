// 'use client';
// import { useSelector } from 'react-redux';
// import styles from '../main.module.css';
// import { Exhibition } from '@/redux/store';

// import Zzim from './Zzim';

// const Zzom: React.FC<Exhibition> = () => {
//   const favorites = useSelector((state: Exhibition[]) => state);

//   return (
//     <div className={styles.main}>
//       {favorites.length === 0 ? (
//         <div>찜 해놓은 전시회가 없습니다.</div>
//       ) : (
//         favorites.map((exhibition: Exhibition) => (
//           <Zzim key={exhibition.id} exhibition={exhibition} />
//         ))
//       )}
//     </div>
//   );
// };
// export default Zzom;

'use client';

import { useSelector } from 'react-redux';
import styles from '../main.module.css';
import { Exhibition } from '@/redux/store';

import Zzim from './Zzim';

const Zzom = () => {
  // Redux 상태에서 찜 목록 가져오기
  const favorites = useSelector((state: { favorites: Exhibition[] }) => state.favorites);

  return (
    <div className={styles.main}>
      {favorites.length === 0 ? (
        <div>찜 해놓은 전시회가 없습니다.</div>
      ) : (
        favorites.map((exhibition: Exhibition) => (
          <Zzim key={exhibition.id} exhibition={exhibition} />
        ))
      )}
    </div>
  );
};

export default Zzom;
