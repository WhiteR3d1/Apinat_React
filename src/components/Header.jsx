import { NavLink, useNavigate } from "react-router-dom";
import "../css/header.css";
// 1. นำเข้า useNavigate เพิ่มเติม

const Header = ({ userInfo, logout }) => {
    const navigate = useNavigate(); // 2. ประกาศเรียกใช้งานตัวเปลี่ยนหน้า

    // 3. สร้างฟังก์ชันสำหรับจัดการตอนกดปุ่ม Logout
    const handleLogout = () => {
        logout(); // สั่งให้ออกจากระบบ (ฟังก์ชันเดิมที่ส่งมาจาก App.js)
        navigate("/"); // บังคับให้ URL กลับไปที่หน้าแรก ("/") ทันที
    };

    return (
        <nav className="main-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#333', padding: '15px 30px', color: 'white', width: '100%' }}>

            <div className="nav-links" style={{ display: 'flex', gap: '25px' }}>
                <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</NavLink>
                <NavLink to="/edu" style={{ color: 'white', textDecoration: 'none' }}>Education</NavLink>
                <NavLink to="/Activity" style={{ color: 'white', textDecoration: 'none' }}>My Work</NavLink>
                <NavLink to="/itunes" style={{ color: 'white', textDecoration: 'none' }}>iTunes</NavLink>
            </div>

            <div className="auth-section" style={{ marginLeft: '40px' }}>
                <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span className="user-name" style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {userInfo?.displayName}
                    </span>
                    {/* 4. เปลี่ยนจาก onClick={logout} เป็น onClick={handleLogout} */}
                    <button onClick={handleLogout} style={{ backgroundColor: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '5px 15px', borderRadius: '5px', cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            </div>

        </nav>
    );
}

export default Header;