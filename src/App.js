import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

