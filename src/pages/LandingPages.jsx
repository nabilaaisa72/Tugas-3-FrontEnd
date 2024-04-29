import React from "react";
import './styles.css';

function LandingPages() {
    return ( 
        <>
            <header className="Header fixed top-0 left-0 right-0 text-3xl">
                Header atau Navbar
            </header>
            <main className="center">
                <div className="bio-container">
                    <h1>RESTORAN</h1>
                    <div className="restoran-row">
                        <div className="restoran-item">
                            <p>Nama : Bohemian Whisk</p>
                            <p>Alamat : Dreamy Shadow Street</p>
                            <p>Meja : 12</p>
                            <p>Pesanan : FairyTale Pasta Lemonade</p>
                        </div>
                        <div className="restoran-item">
                            <p>Nama : Charming Vibes</p>
                            <p>Alamat : Tranquil Terracce</p>
                            <p>Telephone : 234759973</p>
                            <p>Pesanan : Flower Blossom Salad</p>
                        </div>
                        <div className="restoran-item">
                            <p>Nama : Rustic Retreat</p>
                            <p>Alamat : Whispering Avenue Love</p>
                            <p>Gender : Perempuan</p>
                            <p>Pesanan : Enthanced Sushi Rolls</p>
                        </div>
                    </div>
                </div>    
            </main>
            <footer className="Footer fixed bottom-0 left-0 right-0 text-3xl">
                Mari kita makan sampai kenyang !!!!
            </footer>
        </>
     );
}

export default LandingPages;