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
      return <li key={i}>{el.therapist} + {el.specialization}</li>;
    })}
  </ul>
);

const ScheduleList = ({ schedule }) => (
  <ul>
    {schedule.map((el, i) => {
      return (
        <li key={i}>
          {el.hour} {el.hour.value} + {el.patient} + {el.therapist}
        </li>
      );
    })}
  </ul>
);

const TherapistView = ({ therapists, schedule }) => {
  let theraList = [...therapists];
  let schedList = [...schedule];
  let assignment = [];

  let updatedList = theraList.map(el => {
   return el.therapist + " - " + el.specialization
  })

  updatedList.forEach(el => {
    let assigned = schedList.filter(function(x) {
      if (x["therapist"] === el) {
        return true;
      }
      return false;
    });
    assignment.push({'therapist' : el, 'sched' : assigned});
  });
  return (
    <div>
      {assignment.map((el, i) => {
         el.sched.sort((a,b) => {
          if(a.hour < b.hour){
            return -1;
          }
          if (a.hour > b.hour){
            return 1;
          }
          return 0;
        })
        return (
          <div key={i}>
            <h3>{el.therapist}</h3>
            {el.sched.map((ex, i) => {
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

const PatientView = ({ patients, schedule }) => {
  let patList = [...patients];
  let scheduleList = [...schedule];
  let assignment = [];

  patList.forEach(el => {
    let assigned = scheduleList.filter(function(x) {
      if (x["patient"] === el["patient"]) {
        return true;
      }
      return false;
    });
    assignment.push({'patient' : el["patient"], 'sched' : assigned});
  });
  return (
    <div>
      {assignment.map((el, i) => {
        return (
          <div key={i}>
            <h3>{el.patient}</h3>
            {el.sched.map((ex, i) => {
              return (
                <div key={i}>
                  {ex.therapist} + {ex.hour}
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
export const PView = connect(mapStateToProps)(PatientView);
