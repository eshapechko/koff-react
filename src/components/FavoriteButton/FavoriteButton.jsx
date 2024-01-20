import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../store/favorite/favoriteSlice';
import { useState } from 'react';

export const FavoriteButton = ({ className, id }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  const isFavorite = favoriteList.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <button
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleFavoriteClick}>
      <svg
        width='16'
        height='14'
        viewBox='0 0 16 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8.41331 12.8733C8.18665 12.9533 7.81331 12.9533 7.58665 12.8733C5.65331 12.2133 1.33331 9.45998 1.33331 4.79332C1.33331 2.73332 2.99331 1.06665 5.03998 1.06665C6.25331 1.06665 7.32665 1.65332 7.99998 2.55998C8.67331 1.65332 9.75331 1.06665 10.96 1.06665C13.0066 1.06665 14.6666 2.73332 14.6666 4.79332C14.6666 9.45998 10.3466 12.2133 8.41331 12.8733Z'
          fill={hover !== isFavorite ? '#780096' : '#FFFFFF'}
          stroke={hover !== isFavorite ? '#780096' : '#1c1c1c'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};
