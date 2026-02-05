import "../src/css/tct.css";
import Student from "./components/Student";

function App() {
  const std1 = { name: "Apinat Ladloy", stdid: '6802041510198' , depart: "Computer Education"};
  return (
    <div style={{ 
      minHeight: '100vh',
      
      backgroundImage: `linear-gradient(
        115deg, 
        #ff5e3a 50%,          /* สีส้มด้านซ้าย */
        rgba(0,0,0,0.2) 50%,  /* เงาตรงรอยต่อ (เพื่อให้ดูมีมิติซ้อนกัน) */
        #c83cb9 50.5%         /* สีม่วงด้านขวา */
      )`,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <Student stdinfo={std1} />
    </div>
  );
}

export default App;
