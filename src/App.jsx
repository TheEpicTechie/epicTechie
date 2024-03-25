import { Routes, Route } from "react-router-dom";
import RootLayout from "./root/RootLayout";
import { Home, About, MissingPage } from "@/root/pages";

function App() {
  return (
    <Routes>
      {/* Private Routes */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      {/* Public Routes */}
      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
}

export default App;
