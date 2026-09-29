import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  const handleCardClick = (index: number) => {
    const target = containerRef.current[index];
    if (!target) return;

    const isAlreadyActive = target.classList.contains("what-content-active");

    containerRef.current.forEach((el) => {
      if (el) {
        el.classList.remove("what-content-active");
        el.classList.remove("what-sibling");
      }
    });

    if (!isAlreadyActive) {
      target.classList.add("what-content-active");
      containerRef.current.forEach((el, i) => {
        if (el && i !== index) {
          el.classList.add("what-sibling");
        }
      });
    }
  };

  useEffect(() => {
    const elements = containerRef.current;
    const listeners = elements.map((container, index) => {
      if (!container) return null;
      const fn = () => handleCardClick(index);
      container.addEventListener("click", fn);
      return { container, fn };
    });

    return () => {
      listeners.forEach((item) => {
        if (item) {
          item.container.removeEventListener("click", item.fn);
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%" height="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg width="100%" height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>SAP ABAP</h3>
              <h4>Development</h4>
              <p>
                Building enterprise-grade SAP solutions with ABAP — from layered
                CDS-based reports and interactive ALV grids to data migrations,
                custom enhancements, and performance-optimized ABAP on HANA
                development.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Core ABAP</div>
                <div className="what-tags">OO ABAP</div>
                <div className="what-tags">ALV Reports</div>
                <div className="what-tags">CDS Views</div>
                <div className="what-tags">Open SQL</div>
                <div className="what-tags">DDIC</div>
                <div className="what-tags">BDC</div>
                <div className="what-tags">BAPI</div>
                <div className="what-tags">Enhancements</div>
                <div className="what-tags">Forms</div>
                <div className="what-tags">ABAP on HANA</div>
                <div className="what-tags">Debugging</div>
                <div className="what-tags">SAP GUI</div>
                <div className="what-tags">Eclipse/ADT</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg width="100%" height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PROGRAMMING</h3>
              <h4>& AI</h4>
              <p>
                Solid foundation in programming, databases, and AI/ML — building
                web applications, REST APIs, and intelligent systems powered by
                LLMs and retrieval-augmented generation.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Machine Learning</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">Flask</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Git/GitHub</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Streamlit</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
