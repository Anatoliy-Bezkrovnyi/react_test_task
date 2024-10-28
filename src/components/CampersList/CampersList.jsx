import CamperItem from "../CamperItem/CamperItem";
import style from "./CampersList.module.css";

const CampersList = ({ campers = [] }) => {
  return (
    <ul className={style.camperList}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CamperItem {...camper} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;