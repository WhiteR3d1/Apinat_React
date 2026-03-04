import "../src/css/tct.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Student from "./components/Student"; // นี่คือหน้าแรก
import Activity from "./components/Activity";
import Education from "./components/Education";
import PageNotFound from "./components/PageNoyFound";
import Itunes from "./components/Itunes";
import auth from "./Auth.js";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState(null); 
  const std1 = { name: "Apinat Ladloy", stdid: '6802041510198', depart: "Computer Education" };
  
  const login = () => {
    const provider = new GoogleAuthProvider();
    auth.useDeviceLanguage();
    signInWithPopup(auth, provider)
      .then((result) => {
        // ล็อกอินสำเร็จ
      }).catch((error) => {
        window.alert(error);
      });
  }

  const logout = () => {
    signOut(auth).then(() => {
      // ออกจากระบบสำเร็จ
    }).catch((error) => {
      alert(error);
    });
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) { 
        setUserInfo(user);
      } else {  
        setUserInfo(null);
      }
    })
  }, []); 

  return (
    <BrowserRouter basename="/Apinat_React">
      {/* ถ้ายอมให้เข้าเว็บเลยโดยไม่ต้อง Login ก็ลบเงื่อนไข {!userInfo ? ... : ...} ออกได้เลยครับ แต่ถ้าจะบังคับ Login ก่อนให้คงโค้ดส่วนนี้ไว้ */}
      
      {!userInfo ? (
        // หน้าตาปุ่ม Login
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8fafc' }}>
            <h1 style={{ marginBottom: '20px', color: '#1e293b' }}>Welcome to My Portfolio</h1>
            <p style={{ marginBottom: '30px', color: '#64748b' }}>Please login to continue</p>
            <button onClick={login} className="btn btn-primary btn-lg" style={{ padding: '10px 30px', borderRadius: '30px', backgroundColor: '#6366f1', border: 'none', color: 'white', fontWeight: 'bold' }}>
                Login with Google
            </button>
        </div>
      ) : (
        // พอ Login เสร็จจะมาทำงานตรงนี้
        <>
          {/* ส่งค่าไปให้ Header เพื่อทำปุ่ม Logout และแสดงชื่อ */}
          <Header userInfo={userInfo} logout={logout} />

          <Routes>
            {/* Student คือหน้าแรก */}
            <Route path="/" element={<Student stdinfo={std1} />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/itunes" element={<Itunes />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;