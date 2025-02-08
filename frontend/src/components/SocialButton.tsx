import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/SocialButton.css'

export default function SocialButton({url, icon, text}: {url : string, icon : IconProp, text : string}) {
    return (
        <button onClick={() => (window.location.href = url)} className="project-footer-button">
            <FontAwesomeIcon icon={icon} />
            <span className="ms-2">{text}</span>
        </button>
    )
}