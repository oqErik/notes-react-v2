import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import { Outlet } from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
