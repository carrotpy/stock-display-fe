import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import MainTable from "./MainPage/TableHeader";
import Addbutton from "./MainPage/Addproduct";
import Editbutton from "./MainPage/EditProduct";
import Loginpage from "./MainPage/LoginPage";
import RequireAuth from "./MainPage/Auth";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              {" "}
              <MainTable />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/1"
          element={
            <RequireAuth>
              {" "}
              <Addbutton />
            </RequireAuth>
          }
        />
        <Route
          path="/editdata"
          element={
            <RequireAuth>
              <Editbutton />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
