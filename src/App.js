import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout";
import About from "./components/about";
import User from "./components/user";
import SingleUser from "./components/singleUser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/user/:id" element={<SingleUser />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
