import mypic from '../images/10.png';
import '../css/tct.css';

function student(props) {
    return (
        <div className="card-container">
            <div className="card-image-box">
                <img src={mypic} alt="profile" className="card-img" />
            </div>
            <div className="card-content">
                <div className="card-badge">KMUTNB Student</div>
                <h1 className="card-name">{props.stdinfo.name}</h1>
                <p className="card-dept">{props.stdinfo.depart}</p>
                <div className="card-divider"></div>
                
                <div className="card-info">
                    <div className="info-row">
                        <span className="label">ID:</span>
                        <span>{props.stdinfo.stdid}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">University:</span>
                        <span>KMUTNB</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default student;