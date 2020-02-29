import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { 
      patients: state.patients,
      therapists: state.therapists
};
};

const PConnectedList = ({ patients }) => (
  <ul>
    {patients.map((el, i) => {
        return(<li key={i}>{el.name}</li>)
    })}
  </ul>
);

const TConnectedList = ({ therapists }) => (
    <ul>
      {therapists.map((el, i) => {
          return(<li key={i}>{el.name}</li>)
      })}
    </ul>
  );

export const PList = connect(mapStateToProps)(PConnectedList);
export const TList = connect(mapStateToProps)(TConnectedList);