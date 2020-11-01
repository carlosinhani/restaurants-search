import React from 'react';
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, ResturantPhoto, Title, Address} from './style';

const RestaurantCard = ({ restaurant }) => (
  <Restaurant>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#f1c40f" />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <ResturantPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
      alt="Foto do Restaurante"
    />
  </Restaurant>
);

export default RestaurantCard;
