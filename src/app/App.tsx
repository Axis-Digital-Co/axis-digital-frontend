import css from './App.module.css';
import Header from '../components/Header/Header';
import HomePage from './HomePage';
import PricePage from './PricePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={css.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/price" element={<PricePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
