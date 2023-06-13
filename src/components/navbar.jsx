import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Aura's Portfolio
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/1EfTN-tu_O7MV_yQkXcfUES6UtbI0P1h2/view?usp=drivesdk" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;