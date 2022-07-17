import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import SingIn from "./routes/SignIn";

const Shop = () => {
  return (
    <div>
      <h1>Shopping</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
