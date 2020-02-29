import { ADD_PATIENT } from "../constants/action-types";
import { ADD_THERAPIST } from "../constants/action-types";

export function addPatient(info) {
    return { type: ADD_PATIENT, info }
  };

export function addTherapist(info) {
    return { type: ADD_THERAPIST, info }
  };