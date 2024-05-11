import { Outlet } from "react-router-dom";
import NaveBar from "../Component/Naveber/NaveBar";
import Footer from "../Component/Footer/Footer";


const Roote = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roote;