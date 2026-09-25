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
              Bachelor of Technology in Computer Science & Engineering with
              specialization in Artificial Intelligence. Achieved a CGPA of
              7.5/10 while building a strong foundation in programming, database
              concepts, and SAP technologies.
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
              Created and worked with SAP DDIC objects including Domains, Data
              Elements, Tables, Views, and Search Helps. Developed ABAP Reports
              and ALV reports using Selection Screens, Internal Tables, and Open
              SQL. Implemented BDC programs for Material Master creation and
              BAPI-based uploads. Worked with SAP Enhancement Framework including
              User Exits, Customer Exits, and BAdIs.
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
              Actively seeking entry-level SAP ABAP Developer roles. Equipped
              with hands-on experience in ABAP Reports, OO ALV, CDS Views, Open
              SQL, BDC, BAPI, and SAP Enhancements. Ready to contribute to
              enterprise SAP development projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
