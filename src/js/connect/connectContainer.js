import { connect } from "react-redux";
import { addPatient } from "../actions/index";
import { addTherapist } from "../actions/index";
import { addSchedule } from "../actions/index";

const mapStateToProps = state => {
  return {
    patients: state.patients,
    therapists: state.therapists,
    schedule: state.schedule
  }; // return data you want from reducers
};

const mapDispatchToProps = dispatch => {
  return {
    addSchedule: schedule => dispatch(addSchedule(schedule)),
    addPatient: patient => dispatch(addPatient(patient)),
    addTherapist: therapist => dispatch(addTherapist(therapist))
  };
}; // define action creators you want to pass here

export default connect(mapStateToProps, mapDispatchToProps);
