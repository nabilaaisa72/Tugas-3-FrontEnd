import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return ( 
        <>
            <Navbar />
            <Sidebar>
                {children}
                <h1>HALO TEMAN TEMANKU</h1>
            </Sidebar>
        </>
     );
}

export default Layout;