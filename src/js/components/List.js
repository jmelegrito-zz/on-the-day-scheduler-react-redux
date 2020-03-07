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
  <div className="card cardList">
    <div className="card-header">
      Patients
    </div>
    <ul className="list-group list-group-flush">
      {patients.map((el, i) => {
        return <li key={i} className="list-group-item">{el.patient}</li>;
      })}
    </ul>
  </div>
);

const TConnectedList = ({ therapists }) => (
  <div className="card cardList">
    <div className="card-header">
      Therapists
    </div>
    <ul className="list-group list-group-flush">
      {therapists.map((el, i) => {
        return <li key={i} className="list-group-item">{el.therapist} + {el.specialization}</li>;
      })}
    </ul>
  </div>
);

const ScheduleList = ({ schedule }) => (
  <div className="card">
    <ul className="list-group list-group-flush">
      {schedule.map((el, i) => {
        return (
          <li key={i} className="list-group-item">
            {el.hour} {el.hour.value} + {el.patient} + {el.therapist}
          </li>
        );
      })}
    </ul>
  </div>
);

const TherapistView = ({ therapists, schedule }) => {
  let theraList = [...therapists];
  let schedList = [...schedule];
  let assignment = [];

  let updatedList = theraList.map(el => {
    return el.therapist + " - " + el.specialization
  })

  updatedList.forEach(el => {
    let assigned = schedList.filter(function (x) {
      if (x["therapist"] === el) {
        return true;
      }
      return false;
    });
    assignment.push({ 'therapist': el, 'sched': assigned });
  });
  return (
    <div className="cardRow">
      {assignment.map((el, i) => {
        el.sched.sort((a, b) => {
          if (a.hour < b.hour) {
            return -1;
          }
          if (a.hour > b.hour) {
            return 1;
          }
          return 0;
        })
        return (
          <div key={i}>
            <div className="card cardList">
              <div className="card-header">
                {el.therapist}
              </div>
              <ul className="list-group list-group-flush">

                {el.sched.map((ex, i) => {
                  return (
                    <li key={i} className="list-group-item">
                      {ex.patient} + {ex.hour}
                    </li>
                  );
                })}
              </ul>
            </div>
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
    let assigned = scheduleList.filter(function (x) {
      if (x["patient"] === el["patient"]) {
        return true;
      }
      return false;
    });
    assignment.push({ 'patient': el["patient"], 'sched': assigned });
  });
  return (
    <div className="">
      {assignment.map((el, i) => {
        return (
          <div key={i} className="card-deck">
            <div className="card cardList">
              <div className="card-header">
                {el.patient}
              </div>
              <ul className="list-group list-group-flush">
                {el.sched.map((ex, i) => {
                  return (
                    <li key={i} className="list-group-item">
                      {ex.therapist} + {ex.hour}
                    </li>
                  );
                })}
              </ul>
            </div>
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
