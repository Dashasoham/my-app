import './App.css';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ManClothes from './components/ManClothes';
import WomanClothes from './components/WomanClothes';
import { useFetchDataQuery } from './redux/apiSlice';
function App() {
  const { data = [] } = useFetchDataQuery();
  console.log(data);
  return (
    <div className='bg-white min-h-screen bg-cover bg-center  '>
      {' '}
      <Header />
      <header className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route
              path='/manclothing'
              element={<ManClothes apiData={data} />}
            />
            <Route path='/womanclothing' element={<WomanClothes />} />
            {/* <Landing /> */}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
