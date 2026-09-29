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
              Completed a B.Tech in Computer Science & Engineering with a
              specialization in Artificial Intelligence. Built a strong
              foundation in software development, problem-solving, databases,
              and AI while developing a growing interest in enterprise
              application development and SAP technologies.
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
              Developed hands-on experience in SAP ABAP through
              business-oriented projects and practical development work. Built
              reporting solutions around sales and warehouse processes,
              including a Sales Order Lifecycle Report and Warehouse Material
              Backlog Report, with a focus on transforming business
              requirements into practical SAP solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SAP ABAP Developer</h4>
                <h5>Open for Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently seeking an entry-level SAP ABAP Developer opportunity
              to apply my practical development experience in a professional
              environment. Alongside SAP development, my background in Python,
              Java, SQL, AI/ML, and problem-solving allows me to approach
              business requirements from both an application and technical
              perspective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
