import styles from "./HeroButton.module.css";
import { useNavigate } from "react-router-dom";
const HeroButton = () => { 

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate("/catalog")} className={styles.button}>View now</button>        
    );
}
 
export default HeroButton;