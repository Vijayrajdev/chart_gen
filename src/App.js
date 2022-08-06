import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Linechart from "./pages/Linechart";
import Barchart from "./pages/Barchart";
import Areachart from "./pages/Areachart";
import { Routes, Route } from "react-router-dom";
import React from "react";
export const ChartContext = React.createContext();

function App() {
  const ChartState = React.useState({
    userName: "User, Reload the page",
    Chart: "/",
  });
  return (
    <ChartContext.Provider value={ChartState}>
      <div className="min-h-screen bgColor">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/line" element={<Linechart />} />
            <Route path="/bar" element={<Barchart />} />
            <Route path="/area" element={<Areachart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ChartContext.Provider>
  );
}

export default App;
