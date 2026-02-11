import '../css/education.css';
import wbw from '../images/475835965.jpg';
import tmp from '../images/unnamed.jpg';
import ctc from '../images/unnamed2.jpg';

const Education = () => {
    // 1. เพิ่ม property 'logo' เข้าไปในข้อมูล (ใส่ URL รูปจริงของคุณแทนที่ placeholder)
    const schools = [
        { 
            level: "Primary School", 
            name: "Wat Bunyawat Wihan Municipal School", 
            logo: wbw // ใส่ path รูปของคุณตรงนี้ เช่น require('../assets/school1.jpg')
        },
        { 
            level: "Secondary School", 
            name: "Tha Mai Phunsawat Ratnukul School", 
            logo: tmp 

        },
        { 
            level: "Certificate of Vocational", 
            name: "Chanthaburi Technical College", 
            logo: ctc 
        },
    ];

    return (
        <div className="edu-container">
            <h1 className="edu-title">Education</h1>
            
            <div className="edu-card">
                {schools.map((school, index) => (
                    <div key={index} className="school-item">
                        {/* 2. เพิ่มแท็ก img ตรงนี้ */}
                        <div className="school-logo-box">
                            <img src={school.logo} alt={school.name} className="school-img" />
                        </div>
                        
                        {/* จัดกลุ่มข้อความให้อยู่ด้วยกัน */}
                        <div className="school-text">
                            <div className="school-level">{school.level}</div>
                            <div className="school-name">{school.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;