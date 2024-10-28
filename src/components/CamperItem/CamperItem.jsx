import styles from "./CamperItem.module.css"
import icons from "../../assets/Icons/icons.svg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CamperItem = ({ ...camper }) => { 

    const {
            id,
            gallery,
            name: title,
            price,
            reviews,
            rating,
            location,
            description,
        } = camper;  
     
    const navigate = useNavigate();

    return (
    <div className={styles.camperCard}>
        <img src={gallery?.[0].thumb} alt={title} />
      <div className={styles.titleBlock}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.subtitleItems}>
          <div className={styles.rates}>
            <svg
              className={styles.ratesIcon}              
              size="16"
              color="#ffc531">
              <use href={`${icons}#icon-star`} />
            </svg>
            <Link to={`/catalog/${id}/reviews`} className={styles.reviewLink}>
              <span>{rating}</span>({reviews.length} reviews)
            </Link>
          </div>
          <div className={styles.location}>
             <svg
              className={styles.locationIcon}              
              size="16">
              <use href={`${icons}#icon-map`} />
            </svg>            
            {location}
          </div>
        </div>
        <svg
              className={styles.favourite}              
              size="16">
              <use href={`${icons}#icon-heart`} />
        </svg>
      </div>
      <p className={styles.price}>{price}</p>
      
        <p className={styles.description}>{description}</p>
        
        <button className={styles.button} onClick={() => navigate(`/catalog/${id}`)}>Show more</button>
        
      </div>
    
  );
}
 
export default CamperItem