import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">

        <h3 className="title">About Me</h3>

        <p className="para">
          I’m an entry-level{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 700 }}>
            SAP ABAP Developer
          </span>{" "}
          with a{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
            B.Tech in Computer Science & Engineering (AI)
          </span>{" "}
          from{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
            Parul University
          </span>
          . I’m passionate about building practical solutions and using
          technology to solve real-world business problems.
        </p>

        <p className="para">
          Through hands-on projects and continuous learning, I’ve developed a
          strong foundation in{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
            SAP ABAP
          </span>
          ,{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
            OO ABAP
          </span>
          ,{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
            ALV
          </span>
          ,{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
            CDS Views
          </span>
          , and{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
            Open SQL
          </span>
          . I’m focused on growing my expertise and building a career in{" "}
          <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
            SAP development
          </span>
          .
        </p>

      </div>
    </div>
  );
};

export default About;