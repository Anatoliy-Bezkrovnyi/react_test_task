import styles from "./HeroText.module.css";
const HeroText = () => { 

    return (
        <div className={styles.heroText}>
            <h1 className={styles.heroHeader}>Campers of your dreams</h1>
            <p className={styles.heroSubHeader}>You can find everything you want in our catalog</p>
        </div>
    );
}
 
export default HeroText;