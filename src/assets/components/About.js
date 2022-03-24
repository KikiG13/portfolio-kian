// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "../containers/NavBar";
import SocialLinks from "./SocialLinks";

// Image
// import logo from "../images/logo.svg";

const About = ({ theme, setTheme, githubUrl, name, link, bio, twitter, linkedinUrl }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  const socialData = {
    githubUrl: githubUrl,
    link: link,
    twitter: twitter,
    linkedinUrl: linkedinUrl
  };

  return (
    <header id="about" className={newTheme}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
        {/* <img
          className="logo spin img-fluid"
          src={logo}
          alt="React Logo"
          height="45%"
          width="45%"
        /> */}
        <h1>{name}</h1>
        <h3>Software Engineer</h3>
        <hr />
        <p>I am a Software Engineer who is a talented problem solver using a broad skill set including, React, JavaScript, HTML/CSS, and Python. From my background in global education, languages, sales, I am highly adaptable and bring a unique perspective.  I will bring my positive, collaborative, growth mindset attitude to any situation whether I am working in a team or independently.</p>
        <SocialLinks {...socialData} />
        <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>
    </header>
  );
};

export default About;
