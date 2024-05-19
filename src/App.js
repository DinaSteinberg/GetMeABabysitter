// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MomSignUp from "./screens/MomSignUp.jsx";

function App() {
  return (
    <div >
      {/* <CurrentUserProvider> */}
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<HomeScreen />} /> */}
            {/* <Route path="/sitter-login" element={<SitterLoginScreen />}></Route>
            <Route path="/mom-login" element={<MomLoginScreen />}></Route> */}
            {/* <Route path="/sitter-signup" element={<SitterSignUp />}></Route> */}
            <Route path="/mom-signup" element={<MomSignUp />}></Route>
                     </Routes>
        </BrowserRouter>
      {/* </CurrentUserProvider> */}
    </div>
  );
}

export default App;
