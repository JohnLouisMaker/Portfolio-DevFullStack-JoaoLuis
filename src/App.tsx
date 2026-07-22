import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UniaoFelina from "./pages/UniaoFelina";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/uniao-felina" element={<UniaoFelina />} />
    </Routes>
  </BrowserRouter>
);

export default App;
