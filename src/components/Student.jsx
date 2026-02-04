import mypic from '../images/10.png';
import '../css/tct.css';

function student(props) {
    return (
        <div>
            <img src={mypic} alt='my friend boss'
                width={400} /><br />
            <div className='comedu'>
                ID: {props.stdinfo.stdid}<br />
                Name: {props.stdinfo.name}<br />
                department: {props.stdinfo.depart}<br />
                University: KMUTNB
            </div>
        </div>
    );
}
export default student;