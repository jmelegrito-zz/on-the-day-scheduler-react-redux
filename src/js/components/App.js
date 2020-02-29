import React from "react";
import {PList} from "./List";
import {PForm} from "./Form";
import {TList} from "./List";
import {TForm} from "./Form";

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
      <h2>Therapist</h2>
      <TList />
    </div>
    <div>
      <h2>Add a new therapist</h2>
      <TForm />
    </div>
  </>
);

export default App;