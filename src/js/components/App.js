import React from "react";
import {PList} from "./List";
import {PForm} from "./Form";
import {TList} from "./List";
import {TForm} from "./Form";
import Scheduler from "./Scheduler"
import {SList} from "./List";
import {TView} from "./List";
import {PView} from "./List";

const App = () => (
  <>
    <div>
      <h2>Patients</h2>
      <PList />
    </div>
    <div>
      <h2>Add a new patient</h2>
      <PForm />
    </div>
    <div>
      <h2>Therapists</h2>
      <TList />
    </div>
    <div>
      <h2>Add a new therapist</h2>
      <TForm />
    </div>
    <div>
      <h2>Schedule</h2>
      <SList />
    </div>
    <div>
        <h2>Add a new schedule</h2>
        <Scheduler />
    </div>
    <div>
        <h2>Therapist View</h2>
        <TView />
    </div>
    <div>
        <h2>Patient View</h2>
        <PView />
    </div>
  </>
);

export default App;