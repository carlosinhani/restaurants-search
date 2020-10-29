import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';

import logo from '../../assets/logo.svg';

import { Container, Search } from './styles'

const Home = () => {
  const [inputValue, setInpulValue] = useState('');

  return ( <Container>
      <Search>
        <img src={logo} alt="Logo do Restaurante" />
        <TextField
          label='Pesquisar'
          outlined
          //onTrailingIconSelect={() => this.setState({value: ''})}
         // trailingIcon={<MaterialIcon role="button" icon="delete"/>}
        >
          <Input
           value={inputValue}
           onChange={(e) => setInpulValue(e.target.value)} />
        </TextField>
      </Search>
   </Container>
   );
};
export default Home;
