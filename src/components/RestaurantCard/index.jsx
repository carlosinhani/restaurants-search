import React from 'react';
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, ResturantPhoto, Title, Address} from './style';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#f1c40f" />
      <Address>Rua Paulino Tondatti, 132</Address>
    </RestaurantInfo>
    <ResturantPhoto src={restaurante} alt="Foto do Restaurante" />
  </Restaurant>
);

export default RestaurantCard;
