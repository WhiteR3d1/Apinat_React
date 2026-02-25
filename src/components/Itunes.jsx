import React, { useState } from 'react';
import '../css/Itunes.css'; // เดี๋ยวเราจะสร้างไฟล์ CSS นี้

const Itunes = () => {
    // สร้าง State สำหรับเก็บคำค้นหา, รายการเพลง และสถานะการโหลด
    const [term, setTerm] = useState('');
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);

    // ฟังก์ชันสำหรับค้นหาเพลงเมื่อกดปุ่ม Submit
    const handleSearch = async (e) => {
        e.preventDefault(); // ป้องกันหน้าเว็บ Refresh
        if (!term) return; // ถ้าไม่ได้พิมพ์อะไรให้หยุดทำงาน
        
        setLoading(true);
        try {
            // ดึงข้อมูลจาก iTunes API (จำกัด 12 เพลง และเน้นเฉพาะ Music Track)
            const response = await fetch(`https://itunes.apple.com/search?term=${term}&limit=30&entity=musicTrack`);
            const data = await response.json();
            setSongs(data.results); // เอาข้อมูลเพลงไปเก็บใน State
        } catch (error) {
            console.error("เกิดข้อผิดพลาด: ", error);
        }
        setLoading(false);
    };

    return (
        <div className="itunes-container">
            <h1 className="edu-title">iTunes Music</h1>
            
            {/* กล่องค้นหา */}
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="ค้นหาชื่อเพลง หรือ ศิลปิน..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="btn-search">Search</button>
            </form>

            {/* ข้อความตอนกำลังโหลด */}
            {loading && <p className="loading-text">กำลังค้นหา...</p>}

            {/* แสดงรายการเพลง */}
            <div className="songs-grid">
                {songs.map((song) => (
                    <div key={song.trackId} className="song-card">
                        <img src={song.artworkUrl100} alt={song.trackName} className="song-img" />
                        <div className="song-info">
                            <h4 className="song-title">{song.trackName}</h4>
                            <p className="song-artist">{song.artistName}</p>
                            
                            {/* เครื่องเล่นตัวอย่างเพลง 30 วินาที */}
                            <audio controls src={song.previewUrl} className="song-audio"></audio>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Itunes;