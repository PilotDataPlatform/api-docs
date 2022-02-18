import ReactDOM from "react-dom";
import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { RedocStandalone } from "redoc";
import "./App.scss";
import approval from "./swagger/approval.json";
import auth from "./swagger/auth.json";
import bff from "./swagger/bff";
import bff_cli from "./swagger/bff_cli.json";
import dataops from "./swagger/dataops.json";
import dataset from "./swagger/dataset.json";
import download from "./swagger/download.json";
import hpc from "./swagger/hpc.json";
import kg from "./swagger/kg.json";
import lineage from "./swagger/lineage.json";
import metadata from "./swagger/metadata.json";
import notification from "./swagger/notification.json";
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
  lineage: lineage,
  metadata: metadata,
  notification: notification,
  upload: upload,
};

const options = [
  { key: "approval", title: "Approval" },
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
  { key: "dataops", title: "DataOps" },
  {
    title: "Dataset",
    key: "dataset",
  },
  { key: "download", title: "Download" },
  {
    title: "HPC",
    key: "hpc",
  },
  { key: "kg", title: "Knowledge Graph" },
  {
    key: "lineage", title: "Lineage"
  },
  {
    title: "Metadata",
    key: "metadata",
  },
  { key: "notification",
    title: "Notification"
  },
  {
    title: "Upload",
    key: "upload",
  },
];

const App = () => {
  const [key, setKey] = useState(options[0].key);

  return (
    <div class="App">
      <div className="side-bar">
        <div className="side-bar-header">
          <img
            src={"/api-docs/images/pilot-logo-data-platform.svg"}
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
