import ReactDOM from "react-dom";
import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { RedocStandalone } from "redoc";
import "./App.scss";
import auth from "./swagger/auth.json";
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

const options = [
  {
    title: "Auth",
    key: "auth",
  },
  {
    title: "BFF Web",
    key: "bff",
  },
  {
    title: "BFF CLI",
    key: "bff_cli",
  },
  {
    title: "Dataset",
    key: "dataset",
  },
  {
    title: "HPC",
    key: "hpc",
  },
  {
    title: "Metadata",
    key: "metadata",
  },
  {
    title: "Upload",
    key: "upload",
  },
];

const App = () => {
  const [key, setKey] = useState("auth");

  return (
    <div class="App">
      <div className="side-bar">
        <div className="side-bar-header">
          <img
            src={"api-docs/images/pilot-logo-data-platform.svg"}
            alt="Logo"
            style={{ width: "130px" }}
          />
        </div>
        <div className="side-bar-body">
          <h3 className="title">
            {" "}
            <span>API DOCS</span>{" "}
          </h3>
          {options.map((option) => (
            <div className="api-link" key={option.key}>
              {key === option.key && <div className="indicator"></div>}
              <span onClick={() => setKey(option.key)}>{option.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div id="api-data">
        <RedocStandalone
          options={{
            theme: {
              colors: {
                primary: {
                  main: "#103454",
                },
              },
              typography: {
                headings: {
                  fontWeight: 400,
                  lineHeight: "1em",
                },
              },
            },
          }}
          spec={specs[key]}
        />
      </div>
    </div>
  );
};
console.log("foo");
ReactDOM.render(<App />, document.getElementById("app"));
