import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Aura 👋</h1>
                <p>
                    I'm a software developer based in Nairobi, Kenya. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
                </p>
                <div className="social-icons">
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
        </div>
    )
}

export default Hero;