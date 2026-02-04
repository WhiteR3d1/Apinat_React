import Header from "./components/Header";
import Footer from "./components/Footer";
import Student from "./components/Student";

function App() {
  const std1 = { name: "Apinat Ladloy", stdid: '6802055' , depart: "Computer Education"};
  return (
    <div>
      <Header />
      <Student stdinfo={std1} />
      <Footer />
    </div>
  );
}

export default App;
