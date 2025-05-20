'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <button
      onClick={handleClick}
      className="text-xl transition-colors duration-300"
    >
      <FontAwesomeIcon
        icon={faHeart}
        className={`transition-colors duration-300 ${
          liked ? 'text-red-500' : 'text-gray-400'
        }`}
      />
    </button>
  );
}