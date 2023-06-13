import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        👋 Hi, I’m @aurakei. I'm a Software Engineer, with experience
                        and key knowledge in HTML, CSS and JAVASCRIPT. Solid knowledge
                        in NodeJs, PHP, Laravel, React, MySql. Combining Information sciences
                        experience in the workforce with a goal of growing as a Software Developer.
                        Demonstrates strong critical thinking, decision making, problem solving,
                        time management, multi-tasking, and communication skills.
                        Constantly developing myself to be outstanding in my career.                    </p>
                    <p>Throughout my career, I have worked on a wide range of projects,
                        from simple static websites to complex enterprise-level applications.
                        I am experienced in working with a variety of development tools and frameworks,
                        including React/NextJs, Node.js, PHP and Laravel.
                        I am always eager to learn and explore new technologies,
                        and I am constantly seeking out opportunities to improve my skills and knowledge.</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;