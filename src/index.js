import ReactDOM from "react-dom";
import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { RedocStandalone } from "redoc";
import "./App.scss";
import logo from "./pilot_logo.png";
import approval from "./swagger/approval.json";
import auth from "./swagger/auth.json";
import bff from "./swagger/bff";
import bff_cli from "./swagger/bff_cli.json";
import dataops from "./swagger/dataops.json";
import dataset from "./swagger/dataset.json";
import download from "./swagger/download.json";
import hpc from "./swagger/hpc.json";
import kg from "./swagger/kg.json";
import metadata from "./swagger/metadata.json";
import upload from "./swagger/upload.json";

const specs = {
  approval: approval,
  auth: auth,
  bff: bff,
  bff_cli: bff_cli,
  dataops: dataops,
  dataset: dataset,
  download: download,
  hpc: hpc,
  kg: kg,
  metadata: metadata,
  upload: upload,
};

const App = () => {
  const [key, setKey] = useState("bff");

  return (
    <div class="App">
      <div className="side-bar">
        <div className="side-bar-header">
          <img src={logo} alt="Logo" style={{ width: "100px" }} />
          <h3>Pilot Data Platform</h3>
        </div>
        <div className="side-bar-body">
          <h3>API DOCS</h3>

          <div className="api-link" onClick={() => setKey("approval")}>
            Approval
          </div>
          <div className="api-link" onClick={() => setKey("auth")}>
            Auth
          </div>
          <div className="api-link" onClick={() => setKey("bff")}>
            BFF Web
          </div>
          <div className="api-link" onClick={() => setKey("bff_cli")}>
            BFF CLI
          </div>
          <div className="api-link" onClick={() => setKey("dataops")}>
            DataOps
          </div>
          <div className="api-link" onClick={() => setKey("dataset")}>
            Dataset
          </div>
          <div className="api-link" onClick={() => setKey("download")}>
            Download
          </div>
          <div className="api-link" onClick={() => setKey("hpc")}>
            HPC
          </div>
          <div className="api-link" onClick={() => setKey("kg")}>
            Knowledge Graph
          </div>
          <div className="api-link" onClick={() => setKey("metadata")}>
            Metadata
          </div>
          <div className="api-link" onClick={() => setKey("upload")}>
            Upload
          </div>
        </div>
      </div>
      <div id="api-data">
        <RedocStandalone spec={specs[key]} />
      </div>
    </div>
  );
};
console.log("foo");
ReactDOM.render(<App />, document.getElementById("app"));
