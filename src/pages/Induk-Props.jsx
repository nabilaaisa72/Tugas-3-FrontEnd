import Layout from "../componen/Layout";
import Props from "../componen/Props";

const IndukProps = () => {
    const kamar = 77;
    const hotel = "Aston"
    const hari = "sabtu"

    return ( 
        <>
            <Props 
                kamar={kamar}
                hotel={hotel}
                hari={hari}
                booking = {true}/>
            <hr />
            <Props 
                kamar="145"
                hotel="Dialog"
                hari="rabu"
                booking = {false}/>
            <hr />
            <Props 
                kamar="12"
                hotel="Illira"
                hari="jumat"
                booking = {true}/>
            <hr />
            <Props 
                kamar="31"
                hotel="Santika"
                hari="senin"
                booking = {false}/>
            <hr />
        </>
     );
}

const IndukPropsLayout = () => {
    return (
        <Layout>
            <IndukProps />
        </Layout>
    );
}
 
export default IndukPropsLayout;