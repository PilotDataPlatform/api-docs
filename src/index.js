import ReactDOM from "react-dom";
import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { RedocStandalone } from "redoc";
import "./App.scss";
import logo from "./pilot_logo.png";
import auth from "./swagger/auth.json"
import bff from "./swagger/bff";
import bff_cli from "./swagger/bff_cli.json";
import dataset from "./swagger/dataset.json";
import hpc from "./swagger/hpc.json";
import metadata from "./swagger/metadata.json";
import upload from "./swagger/upload.json";

const specs = {
  auth: auth,
  bff: bff,
  bff_cli: bff_cli,
  dataset: dataset,
  hpc: hpc,
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
          <div className="api-link" onClick={() => setKey("auth")}>
            Auth
          </div>
          <div className="api-link" onClick={() => setKey("bff")}>
            BFF Web
          </div>
          <div className="api-link" onClick={() => setKey("bff_cli")}>
            BFF CLI
          </div>
          <div className="api-link" onClick={() => setKey("dataset")}>
            Dataset
          </div>
          <div className="api-link" onClick={() => setKey("hpc")}>
            HPC
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
