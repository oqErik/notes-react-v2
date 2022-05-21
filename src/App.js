import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import { Outlet } from "react-router-dom";


function App() {


  return (

    <div>
      <Navbar />

      <Outlet />
    </div>

  );
}

export default App;
