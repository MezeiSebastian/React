import {  ADD_USER } from "../constants/action-types";

export function addUser(payload,id) {
  return { type: ADD_USER, payload,id };
}
