import { ADD_PATIENT, ADD_SCHEDULER, ADD_THERAPIST } from "../constants/action-types";

const initialState = {
  patients: [],
  therapists: [],
  schedule: []
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