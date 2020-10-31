import React, { useState } from 'react';
// import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './styles'

const Home = () => {
  const [inputValue, setInpulValue] = useState('');
  const [modalOpened, setModalOpened] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
            label='Pesquisar Restaurantes'
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search"/>}>
            <Input value={inputValue}onChange={(e) => setInpulValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Perto de Você</CarouselTitle>
          <Carousel { ...settings}>
            < Card photo={restaurante} title="nome sei la" />
            < Card photo={restaurante} title="nome sei la" />
            < Card photo={restaurante} title="nome sei la" />
            < Card photo={restaurante} title="nome sei la" />
            < Card photo={restaurante} title="nome sei la" />
            < Card photo={restaurante} title="nome sei la" />
            < Card photo={restaurante} title="nome sei la" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};
export default Home;
