// email button 
import ProfilePhoto from "../images/profile-pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info() {
    return (
        <header className="Info-header">
            <img src={ProfilePhoto} alt="profile"/>
            <h1 className="Info-name">Syed Fardeen Farrukh</h1>
            <h2 className="Info-role">Developer</h2>
            <div className="Info-buttons">
                <a
                    className="Info-mailto"
                    href="mailto:fardeenfarrukh1412@gmail.com"
                    type="button"
                >
                    <FontAwesomeIcon icon="envelope" /> Email
                </a>
            </div>
        </header>
    );
}

export default Info;