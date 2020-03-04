import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    patients: state.patients,
    therapists: state.therapists,
    schedule: state.schedule
  };
};

const PConnectedList = ({ patients }) => (
  <ul>
    {patients.map((el, i) => {
      return <li key={i}>{el.patient}</li>;
    })}
  </ul>
);

const TConnectedList = ({ therapists }) => (
  <ul>
    {therapists.map((el, i) => {
      return <li key={i}>{el.therapist}</li>;
    })}
  </ul>
);

const ScheduleList = ({ schedule }) => (
  <ul>
    {schedule.map((el, i) => {
      return <li key={i}>{el.name} + {el.patient} + {el.therapist}</li>;
    })}
  </ul>
);

export const PList = connect(mapStateToProps)(PConnectedList);
export const TList = connect(mapStateToProps)(TConnectedList);
export const SList = connect(mapStateToProps)(ScheduleList);