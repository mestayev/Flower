import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Maiin from './components/Maiin';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Catalog from './components/2 page/Catalog';
import Gul1 from './components/2 page/Buy/Gul1';
import Register from './components/Reg/Register';
import Caatalog from './components/2 page/Buy/Caatalog';

const Container = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<Maiin />}></Route>
        <Route path="/catalog/:category" element={<Catalog />} />
        <Route path="/caatalog" element={<Caatalog />} />
        <Route path="/gul1/:productId" element={<Gul1 />} />
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
