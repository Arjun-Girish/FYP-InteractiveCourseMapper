import "./App.css";
import Routes from "./router/routes";
import logo from './logo.png';
import {Link} from 'react-router-dom';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Navbar />


      <div className="main">
        <Routes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
