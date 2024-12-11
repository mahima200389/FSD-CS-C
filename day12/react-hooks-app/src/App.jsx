// import CounterApp from "./components/CounterApp";
import CounterApp from "./components/CounterApp";
import ImageApp from "./components/ImageApp";
import MainLayout from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/image" element={<ImageApp />} />
            <Route path="/counter" element={<CounterApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
