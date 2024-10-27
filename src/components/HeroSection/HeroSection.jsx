import styles from "./HeroSection.module.css";
import HeroText from "../HeroText/HeroText";
import HeroButton from "../HeroButton/HeroButton";
import clsx from "clsx";

const HeroSection = () => { 

    return (
        <section className={styles.heroSection}>
            <div className={clsx("container", styles.heroContent)}>
                <HeroText />
                <HeroButton />
            </div>            
        </section>
    );
}
 
export default HeroSection;