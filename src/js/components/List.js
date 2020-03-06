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
      return (
        <li key={i}>
          {el.hour} + {el.patient} + {el.therapist}
        </li>
      );
    })}
  </ul>
);

const TherapistView = ({ therapists, schedule }) => {
  let theraList = [...therapists];
  let schedList = [...schedule];
  let assignment = [];

  theraList.forEach(el => {
    let assigned = schedList.filter(function(x) {
      if (x["therapist"] === el["therapist"]) {
        return true;
      }
      return false;
    });
    assignment.push(assigned);
  });
  return (
    <div>
      {assignment.map((el, i) => {
        return (
          <div key={i}>
 
            {el.map((ex, i) => {
              return (
                <div key={i}>
                  {ex.patient} + {ex.hour}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const PList = connect(mapStateToProps)(PConnectedList);
export const TList = connect(mapStateToProps)(TConnectedList);
export const SList = connect(mapStateToProps)(ScheduleList);
export const TView = connect(mapStateToProps)(TherapistView);
