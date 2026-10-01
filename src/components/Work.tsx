import { useRef } from "react";
import "./styles/Work.css";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    num: "01",
    name: "Sales Order Lifecycle Report",
    category: "SAP ABAP / CDS Views",
    tools: "CDS Views, OO ALV, CL_SALV_TABLE, Open SQL",
    description:
      "Developed a Sales Order to Delivery and Billing reporting solution using layered ABAP CDS Views with base, aggregation, composite, and consumption views. Built OO ALV with calculated Open Quantity, Delivery %, Billing %, and Business Status.",
    image: "/images/Sales.png",
  },
  {
    num: "02",
    name: "Warehouse Material Backlog",
    category: "SAP ABAP / Interactive ALV",
    tools: "CDS Views, OO ALV Grid, Open SQL, BDC",
    description:
      "Developed a warehouse backlog reporting solution integrating Sales Order, Material Stock, Customer, Schedule Line, and Delivery data. Implemented interactive OO ALV Grid with editable fields, automatic backlog calculations, and double-click navigation.",
    image: "/images/Warehouse.png",
  },
  {
    num: "03",
    name: "Material Master Upload",
    category: "SAP ABAP / BDC & BAPI",
    tools: "BDC, BAPI_MATERIAL_SAVEDATA, Session Method, Call Transaction",
    description:
      "Implemented BDC programs for Material Master creation through MM01 using Session Method and Call Transaction, with a BAPI-based upload solution.",
    image: "/images/BDC.png",
  },
  {
    num: "04",
    name: "Movie Recommendation System",
    category: "Machine Learning / Python",
    tools:
      "Python, FastAPI, Streamlit, Scikit-learn, TF-IDF, Cosine Similarity, NLTK, TMDB API, Content-Based Recommendation, Genre-Based Recommendations",
    description:
      "A content-based Movie Recommendation System built using Python, Scikit-learn, FastAPI, Streamlit, and the TMDB API. It recommends movies using TF-IDF vectorization and Cosine Similarity while providing movie details, posters, genres, and metadata through TMDB.",
    image: "/images/movie.png",
    link: "https://movie-recomendation-project.onrender.com",
  },
];

const Work = () => {
  const workRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let translateX: number = 0;

      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        if (!box.length) return;
        const workContainer = document.querySelector(".work-container");
        if (!workContainer || !box[0].parentElement) return;
        const rectLeft = workContainer.getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: workRef.current,
          start: "top top",
          end: () => `+=${translateX}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          id: "work",
          invalidateOnRefresh: true,
          onRefresh: () => {
            setTranslateX();
          },
        },
      });

      timeline.to(".work-flex", {
        x: () => -translateX,
        ease: "none",
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill(true);
      };
    },
    { scope: workRef }
  );

  return (
    <div className="work-section" id="work" ref={workRef}>
      <div className="work-container section-container">
        <div className="work-heading">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-heading-links">
            <a
              href="https://github.com/Zinb-NMK"
              target="_blank"
              rel="noopener noreferrer"
              className="work-heading-link"
              aria-label="GitHub"
              data-cursor="disable"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/Manojkumar_Nagaram/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-heading-link"
              aria-label="LeetCode"
              data-cursor="disable"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
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
              <WorkImage image={project.image || "/images/placeholder.webp"} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
