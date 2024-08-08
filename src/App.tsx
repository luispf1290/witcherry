import { Home } from "./pages";
import { DetailTemplate } from "./templates/DetailTemplate";
import { MainTemplate } from "./templates/MainTemplate";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/witcherry/*" element={<MainTemplate />} />
      <Route path="/witcherry/platillo/:id" element={<DetailTemplate />} />
      <Route path="/witcherry/home" element={<Home />} />
    </Routes>
  );
}

export default App;
