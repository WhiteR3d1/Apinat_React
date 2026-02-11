import "../src/css/tct.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Student from "./components/Student";
import Activity from "./components/Activity";
import Education from "./components/Education";
import PageNotFound from "./components/PageNoyFound";

function App() {
  const std1 = { name: "Apinat Ladloy", stdid: '6802041510198', depart: "Computer Education" };
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Student stdinfo={std1} />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
