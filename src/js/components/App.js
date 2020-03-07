import React from "react";
import { PList } from "./List";
import { PForm } from "./Form";
import { TList } from "./List";
import { TForm } from "./Form";
import Scheduler from "./Scheduler"
import { SList } from "./List";
import { TView } from "./List";
import { PView } from "./List";
import Home from "./Home";
import '../../App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => (
  <div className="pageFormat">
    <div className="row leftPane rightPane">
      <div className="col">
        <div>
          <PList />
        </div>
        <div>
          <PForm />
        </div>
        <div className="space">
          <TList />
        </div>
        <div>
          <TForm />
        </div>
        <div className="space">
          <Scheduler />
        </div>
      </div>
    </div>
    <div className="rightPane">
      <BrowserRouter>
        <nav className="navbar navbar-dark navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/raw" className="nav-link">Raw Schedule View</Link></li>
            <li className="nav-item"><Link to="/therapist" className="nav-link">Therapist View</Link></li>
            <li className="nav-item"><Link to="/patient" className="nav-link">Patient View</Link></li>
          </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/raw" component={SList} />
          <Route exact path="/therapist" component={TView} />
          <Route exact path="/patient" component={PView} />
        
      </BrowserRouter>
    </div>
  </div>
);

export default App;