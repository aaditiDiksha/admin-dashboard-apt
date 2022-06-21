import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List  from "./pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home/>}></Route>
            <Route path="users" element={<List/>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
