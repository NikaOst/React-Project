import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Cart } from './pages/Cart';

// cmd + D - выделяет одинаковое в коде
// ctrl + z - стоп действие терминала
// npx - launch programm (as react-app)
//cmd + shift + z - вернуть отмененное действие

//компоненты только с большой буквы

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
