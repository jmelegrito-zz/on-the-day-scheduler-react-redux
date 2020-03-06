import { ADD_PATIENT } from "../constants/action-types";
import { ADD_THERAPIST } from "../constants/action-types";
import { ADD_SCHEDULER } from "../constants/action-types";
import { RESET_SCHEDULER } from "../constants/action-types";
import { RESET_PATIENT } from "../constants/action-types";

export function addPatient(info) {
  return { type: ADD_PATIENT, info }
};

export function addTherapist(info) {
  return { type: ADD_THERAPIST, info }
};

export function addSchedule(info) {
  return { type: ADD_SCHEDULER, info }
};

export function resetSchedule() {
  return { type: RESET_SCHEDULER }
};

export function resetPatient() {
  return { type: RESET_PATIENT }
};