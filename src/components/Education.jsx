import '../css/education.css';
import wbw from '../images/475835965.jpg';
import tmp from '../images/unnamed.jpg';
import ctc from '../images/unnamed2.jpg';

const Education = () => {
    const schools = [
        { 
            level: "Primary School", 
            name: "Wat Bunyawat Wihan Municipal School", 
            logo: wbw,
            link: "https://www.facebook.com/boonyavas/?locale=th_TH"
        },
        { 
            level: "Secondary School", 
            name: "Tha Mai Phunsawat Ratnukul School", 
            logo: tmp,
            link: "https://www.thamai.ac.th/"
        },
        { 
            level: "Certificate of Vocational", 
            name: "Chanthaburi Technical College", 
            logo: ctc,
            link: "https://www.technicchan.ac.th/"
        },
    ];

    return (
        <div className="edu-container">
            <h1 className="edu-title">Education</h1>
            
            <div className="edu-card">
                {schools.map((school, index) => (
                    /* ย้ายแท็ก <a> มาครอบ school-item ทั้งหมด */
                    <a 
                        key={index} 
                        href={school.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="school-link-wrapper" /* เพิ่ม class นี้เพื่อไปเขียน CSS */
                    >
                        <div className="school-item">
                            <div className="school-logo-box">
                                <img src={school.logo} alt={school.name} className="school-img" />
                            </div>
                            
                            <div className="school-text">
                                <div className="school-level">{school.level}</div>
                                <div className="school-name">{school.name}</div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Education;