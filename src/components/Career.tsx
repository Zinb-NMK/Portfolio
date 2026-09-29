import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – CSE (AI)</h4>
                <h5>Parul University, Gujarat</h5>
              </div>
              <h3>2022 – 2026</h3>
            </div>
            <p>
              Completed a{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                B.Tech in Computer Science & Engineering
              </span>{" "}
              with a specialization in{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                Artificial Intelligence
              </span>
              . Built a strong foundation in{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                software development
              </span>
              ,{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                problem-solving
              </span>
              , databases, and AI while developing a growing interest in{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                enterprise application development
              </span>{" "}
              and{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                SAP technologies
              </span>
              .
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SAP ABAP Trainee</h4>
                <h5>JKS Learning</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed hands-on experience in{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                SAP ABAP
              </span>{" "}
              through{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                business-oriented projects
              </span>{" "}
              and practical development work. Built reporting solutions around{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                sales and warehouse processes
              </span>
              , including a{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                Sales Order Lifecycle Report
              </span>{" "}
              and{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                Warehouse Material Backlog Report
              </span>
              , with a focus on transforming{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                business requirements
              </span>{" "}
              into practical{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                SAP solutions
              </span>
              .
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SAP ABAP Developer</h4>
                <h5>Open For Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently seeking an{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                entry-level SAP ABAP Developer
              </span>{" "}
              opportunity to apply my{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                practical development experience
              </span>{" "}
              in a professional environment. Alongside{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                SAP development
              </span>
              , my background in{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                Python, Java, SQL, AI/ML
              </span>
              , and problem-solving allows me to approach{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                business requirements
              </span>{" "}
              from both an{" "}
              <span style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                application and technical perspective
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
