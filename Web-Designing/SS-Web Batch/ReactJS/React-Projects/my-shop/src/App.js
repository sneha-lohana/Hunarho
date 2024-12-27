import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
         <Outlet /> {/* Container */}
      </main>
    </div>
  );
}

export default App;
