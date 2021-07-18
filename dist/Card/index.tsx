import React from 'react';
import { boxShadow } from '../../styles';

export const Card = ({ children }: { children: any }) => {
  const cardStyle = {
    borderRadius: '8px',
    boxShadow
  }
  return (
    <div>
      { children }
    </div>
  );
}

export default Card;
