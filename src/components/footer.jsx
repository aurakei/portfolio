const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} Aura's Portfolio
                </p>
                <div className="social_icons">
                    <a
                        href="https://twitter.com/Aurakeith3?t=S_0kpC2Acss5eLNXekkZVw&s=09"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/aurakei"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/atulo-keith-aura-87aa63243"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        href="https://medium.com/@aurakeith"
                        aria-label="Medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-medium"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;