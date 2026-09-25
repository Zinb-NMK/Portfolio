import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    name: "Sales Order Lifecycle Report",
    category: "SAP ABAP / CDS Views",
    tools: "CDS Views, OO ALV, CL_SALV_TABLE, Open SQL",
    description:
      "Developed a Sales Order to Delivery and Billing reporting solution using layered ABAP CDS Views with base, aggregation, composite, and consumption views. Built OO ALV with calculated Open Quantity, Delivery %, Billing %, and Business Status.",
  },
  {
    num: "02",
    name: "Warehouse Material Backlog",
    category: "SAP ABAP / Interactive ALV",
    tools: "CDS Views, OO ALV Grid, Open SQL, BDC",
    description:
      "Developed a warehouse backlog reporting solution integrating Sales Order, Material Stock, Customer, Schedule Line, and Delivery data. Implemented interactive OO ALV Grid with editable fields, automatic backlog calculations, and double-click navigation.",
  },
  {
    num: "03",
    name: "Material Master Upload",
    category: "SAP ABAP / BDC & BAPI",
    tools: "BDC, BAPI_MATERIAL_SAVEDATA, Session Method, Call Transaction",
    description:
      "Implemented BDC programs for Material Master creation through MM01 using Session Method and Call Transaction, with a BAPI-based upload solution.",
  },
  {
    num: "04",
    name: "SAP Enhancement Framework",
    category: "SAP ABAP / Enhancements",
    tools: "User Exits, Customer Exits, BAdIs, Implicit/Explicit Enhancements",
    description:
      "Worked with the SAP Enhancement Framework, implementing User Exits, Customer Exits, BAdIs, and Implicit/Explicit Enhancements for custom business logic.",
  },
  {
    num: "05",
    name: "DDIC Object Management",
    category: "SAP ABAP / Data Dictionary",
    tools:
      "Domains, Data Elements, Tables, Views, Search Helps, Lock Objects",
    description:
      "Created and managed SAP Data Dictionary objects including Domains, Data Elements, Structures, Tables, Views, Search Helps, Lock Objects, and Table Maintenance Generators.",
  },
  {
    num: "06",
    name: "ALV Report Suite",
    category: "SAP ABAP / Reports",
    tools:
      "Selection Screens, Parameters, Select-Options, Internal Tables, Open SQL",
    description:
      "Developed comprehensive ABAP Reports and ALV reports using Selection Screens, Parameters, Select-Options, Internal Tables, Work Areas, and Open SQL queries.",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
