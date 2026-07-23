import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UniaoFelina from "./pages/UniaoFelina";
import FortalDados from "./pages/FortalDados";
import Cineza from "./pages/Cineza";
import DeliverMenuu from "./pages/DeliverMenuu";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/uniao-felina" element={<UniaoFelina />} />
       <Route path="/deliver" element={<DeliverMenuu />} />
      <Route path="/fortal-dados" element={<FortalDados />} />
      <Route path="/cineza" element={<Cineza/>} />
      
    </Routes>
  </BrowserRouter>
);

export default App;
