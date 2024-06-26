import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {  

  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
