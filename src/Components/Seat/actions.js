import {
  ADD_USER_TICKET,
  ADD_USER_TICKET_SUCCESS,
  ADD_USER_TICKET_FAILURE,
  FETCH_USER_TICKETS,
  FETCH_USER_TICKETS_SUCCESS,
  FETCH_USER_TICKETS_FAILURE
} from "./constants";

export function fetchTickets() {
  return {
    type: FETCH_USER_TICKETS
  };
}

export function addTicket(data) {
  return {
    type: ADD_USER_TICKET,
    data
  };
}
