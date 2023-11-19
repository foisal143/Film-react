import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Filmscontainer from './components/Filmscontainer/Filmscontainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="">
      <Navbar />
      <Filmscontainer></Filmscontainer>
      <ToastContainer />
    </div>
  );
}

export default App;
