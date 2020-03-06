import { ADD_PATIENT, ADD_SCHEDULER, ADD_THERAPIST, RESET_PATIENT, RESET_SCHEDULER } from "../constants/action-types";

const initialState = {
  patients: [],
  therapists: [],
  schedule: [],
  hours: [
      {hour: '06:00 (6AM) - 07:00 (7AM)'},
      {hour: '07:00 (7AM) - 08:00 (8AM)'},
      {hour: '08:00 (8AM) - 09:00 (9AM)'},
      {hour: '09:00 (9AM) - 10:00 (10AM)'},
      {hour: '10:00 (10AM) - 11:00 (11AM)'},
      {hour: '11:00 (11AM) - 12:00 (12NN)'},
      {hour: '12:00 (12NN) - 13:00 (1PM)'},
      {hour: '13:00 (1PM) - 14:00 (2PM)'},
      {hour: '14:00 (2PM) - 15:00 (3PM)'},
      {hour: '15:00 (3PM) - 16:00 (4PM)'},
      {hour: '16:00 (4PM) - 17:00 (5PM)'},
      {hour: '17:00 (5PM) - 18:00 (6PM)'},
      {hour: '18:00 (6PM) - 19:00 (7PM)'}
  ],
  specialization: [
    {type: 'Physical Therapy'},
    {type: 'Occupational Therapy'},
    {type: 'Speech Therapy'}
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
  else if (action.type === RESET_PATIENT){
    return Object.assign({}, state, {
      patients: [...initialState.patients] 
    });
    
  }
  else if (action.type === RESET_SCHEDULER){
    return Object.assign({}, state, {
      schedule: [...initialState.schedule] 
    });
  }
  return state;
}

export default rootReducer;