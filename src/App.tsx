import React from 'react';
import { Header, Banner, Pieces, Instructions, Footer } from './Components';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <Pieces />
        <Instructions />
      </div>
      <Footer />
    </>
  );
}

export default App;
