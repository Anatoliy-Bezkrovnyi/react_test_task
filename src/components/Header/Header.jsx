import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css"
import { clsx } from "clsx";


const Header = () => { 

    return (
        <header className={styles.header}>
            <div className={clsx("container", styles.wrapper)}> 
                <Logo className={styles.logo}/>
                <Navigation />
            </div>            
        </header>
    );
}
 
export default Header;