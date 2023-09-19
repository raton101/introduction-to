import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is tha components</h2>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;