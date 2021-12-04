import logo from "./logo.svg";

import { Tabs, Tab } from "react-bootstrap";
import React, { Component } from "react";

import Wallet from "./components/wallet";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="text-monospace">
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <img src={logo} className="App-logo" alt="logo" height="32" />
        <b>CryptoDashboard</b>
      </nav>

      <div className="container-fluid mt-5 text-center">
        <h1>CryptoBalanceDashboard</h1>
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              <Tabs defaultActiveKey="dashboard" id="mainTabs">
                <Tab eventKey="dashboard" title="Dashboard">
                  <Dashboard />
                </Tab>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
