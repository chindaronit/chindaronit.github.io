import * as React from "react";
import "./Resume.css";
import Wrapper from "../Wrapper/Wrapper";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import ResumeFile from "../../assets/Resume.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <Wrapper>
      <div className="download-cv">
        <a href="https://drive.google.com/uc?export=download&id=19JoGgDD2zClQ9nJ3bCALUNoJ5i7kA2CK">
          <Button variant="contained" startIcon={<DownloadIcon />}>
            Download CV
          </Button>
        </a>
      </div>
      <div className="resume">
        <Document file={ResumeFile} className={"pdf"}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </Wrapper>
  );
};

export default Resume;

