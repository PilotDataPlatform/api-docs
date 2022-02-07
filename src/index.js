import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css"
import { RedocStandalone } from 'redoc'
import './App.css'
import logo from './pilot_logo.png'
import bff from './swagger/bff'
import bff_cli from './swagger/bff_cli.json'
import hpc from './swagger/hpc.json'

const specs = {
    bff:bff,
    bff_cli: bff_cli,
    hpc: hpc

}

const App = () => {

    const [key, setKey] = useState('bff');

    return (
        <div class="App">
            <div className="side-bar">
                <div className="side-bar-header">
                    <img src={logo} alt="Logo" style={{width: "100px"}}/>
                    <h3>Pilot Data Platform</h3>
                </div>
                <div className="side-bar-body">
                    <h3>API DOCS</h3>
                    <div className="api-link" onClick={() => setKey('bff')}>
                        BFF Web
                    </div>
                    <div className="api-link" onClick={() => setKey('bff_cli')}>
                        BFF CLI
                    </div>
                    <div className="api-link" onClick={() => setKey('hpc')}>
                        HPC
                    </div>
                </div>
            </div>
            <div id="api-data">
                <RedocStandalone spec={specs[key]}/>
            </div>
        </div>
    );
}
console.log('foo')
ReactDOM.render(<App />, document.getElementById('app'));
