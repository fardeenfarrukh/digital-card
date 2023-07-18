import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className="Footer">
            <a
                className="Footer-icon"
                href="https://github.com/fardeenfarrukh"
                type="button"
            >
                <FontAwesomeIcon icon={["fab", "github-square"]} size="2x"/>
            </a>
        </div>
    );
}

export default Footer;
