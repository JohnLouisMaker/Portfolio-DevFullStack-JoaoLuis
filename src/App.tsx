import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UniaoFelina from "./pages/UniaoFelina";
import FortalDados from "./pages/FortalDados";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/uniao-felina" element={<UniaoFelina />} />
      <Route path="/fortal-dados" element={<FortalDados />} />
    </Routes>
  </BrowserRouter>
);

export default App;
