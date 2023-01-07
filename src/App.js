
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Regestration from "./components/Regestration";

import Apps from "./components/Apps";
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
   
     <BrowserRouter>
     <Routes>
     <Route path="/"element={<Signin/>} />
          <Route path="/Home"element={<Home/>} />
          <Route path="/apps"element={<Apps/>} />
    
          <Route path="/regestration" element={<Regestration/>} />
     </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
