import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router"
import MainTable from "./MainPage/TableHeader"
import Addbutton from './MainPage/Addproduct';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<MainTable />}/>
        <Route path='/1' element={<Addbutton/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
