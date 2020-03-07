import React from "react";
import {PList} from "./List";
import {PForm} from "./Form";
import {TList} from "./List";
import {TForm} from "./Form";
import Scheduler from "./Scheduler"
import {SList} from "./List";
import {TView} from "./List";
import {PView} from "./List";
import '../../App.css';

const App = () => (
  <div className="container">
    <div className="row">
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
    <div>
        <Scheduler />
    </div>
    </div>
    <div className="col">
    <div>
        <h2>Therapist View</h2>
        <TView />
    </div>
    <div>
        <h2>Patient View</h2>
        <PView />
    </div>
    <div>
    <h2>Raw Schedule View</h2>
      <SList />
    </div>
    </div>
    </div>
  </div>
);

export default App;