import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";
import { selectCampers } from "../../redux/campersSlice";
import { fetchCampers } from "../../redux/campersOps";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CamperDetailsPage = () => { 

    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
   

    useEffect(() => {
        dispatch(fetchCampers());         
    }, [dispatch]);
    

    return (
        <>
            <Header />
            <CampersList campers={ campers } />            
        </>
        
    );
}
 
export default CamperDetailsPage;