import '../css/activity.css';
import Photography from '../images/photography.png';
import MusicListening from '../images/music-listening.png';
import MusicPlaying from '../images/music-playing.png';
import Gaming from '../images/gaming.png';
import Sports from '../images/sports.png';

function Activity() {
    // ข้อมูลกิจกรรมและไอคอน (เปลี่ยน icon: "" เป็นตัวแปรรูปภาพที่ import มา)
    const hobbies = [
        { name: "Photography", icon: Photography },
        { name: "Listening to Music", icon: MusicListening },
        { name: "Playing Music & Singing", icon: MusicPlaying },
        { name: "Gaming", icon: Gaming },
        { name: "Sports", icon: Sports }
    ];

    return (
        <div className="activity-container">
            <h3 className="section-title">HOBBIES & INTERESTS</h3>

            <div className="hobbies-list">
                {hobbies.map((item, index) => (
                    <div key={index} className="hobby-item">
                        {/* ส่วนแสดงไอคอน */}
                        <img src={item.icon} alt={item.name} className="hobby-icon" />

                        {/* ส่วนแสดงชื่อ */}
                        <span className="hobby-text">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activity;