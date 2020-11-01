import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles'
import { returnStatement } from '../../../../../../../AppData/Local/Microsoft/TypeScript/4.0/node_modules/@babel/types/lib/index';

const Home = () => {
  const [inputValue, setInpulValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(true);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.Key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
            label='Pesquisar Restaurantes'
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search"/>}>
              <Input
                value={inputValue}
                onKeyPress={handleKeyPress}
                onChange={(e) => setInpulValue(e.target.value)}
              />
          </TextField>
          <CarouselTitle>Perto de Você</CarouselTitle>
          <Carousel { ...settings}>
            {restaurants.map((restaurant) => (
            <Card
                Key={restaurant.place_id}
                photo={restaurant.photo ? restaurant.photos[0].getUrl() : restaurante}
                title={restaurant.name}
              />
            ))}
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
           <RestaurantCard restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
};
export default Home;
