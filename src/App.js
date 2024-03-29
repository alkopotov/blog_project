import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import WorkListPage from './pages/WorkListPage';
import ContactPage from './pages/ContactPage';
import WorkItemPage from './pages/WorkItemPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
        <Route path='/works' element={<WorkListPage/>}/>
        <Route path='/works/tag/:tag' element={<WorkListPage/>}/>
        <Route path='/works/:id' element={<WorkItemPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/blogs/tag/:tag' element={<BlogPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

