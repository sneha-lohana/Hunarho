import { Link, NavLink, Outlet } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>My-Shop</h1>
          <div className='spacer'></div>
          <NavLink to={'\home'} >Home</NavLink>
          {/* <Link to={'\home'} >Home</Link> */}
          {/* <a href='\home'>Home</a> */}
          <NavLink to={'\contact'}>Contact Us</NavLink>
          <NavLink to={'\products'}>Products</NavLink>
        </nav>
      </header>
      <main>
         <Outlet /> {/* Container */}
      </main>
    </div>
  );
}

export default App;
