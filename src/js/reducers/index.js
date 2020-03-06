import { ADD_PATIENT, ADD_SCHEDULER, ADD_THERAPIST } from "../constants/action-types";

const initialState = {
  patients: [],
  therapists: [],
  schedule: [],
  hours: [
      {hour: '6AM - 7AM'},
      {hour: '7AM - 8AM'},
      {hour: '8AM - 9AM'},
      {hour: '9AM - 10AM'},
      {hour: '10AM - 11AM'},
      {hour: '11AM - 12NN'},
      {hour: '12NN - 1PM'},
      {hour: '1PM - 2PM'},
      {hour: '2PM - 3PM'},
      {hour: '3PM - 4PM'},
      {hour: '4PM - 5PM'},
      {hour: '5PM - 6PM'},
      {hour: '6PM - 7PM'}
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_PATIENT) {
    return Object.assign({}, state, {
      patients: state.patients.concat(action.info)
    });
  }
  else if (action.type === ADD_THERAPIST) {
    return Object.assign({}, state, {
        therapists: state.therapists.concat(action.info)
      });
  }
  else if (action.type === ADD_SCHEDULER) {
    return Object.assign({}, state, {
        schedule: state.schedule.concat(action.info)
      });
  }
  return state;
}

export default rootReducer;