import { useEffect } from "react";
import "./styles/ResumeModal.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3>Resume</h3>
          <button className="resume-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="resume-modal-body">
          <iframe
            src="/Manoj_Kumar_Resume.pdf#page=1&zoom=page-fit"
            title="Resume"
            className="resume-modal-iframe"
          />
        </div>
        <div className="resume-modal-footer">
          <a
            className="resume-download-btn"
            href="/Manoj_Kumar_Resume.pdf"
            download="Manoj_Kumar_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
