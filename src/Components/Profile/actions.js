import {
  FETCH_PROFILE,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS
} from "./constants";

export function getProfile(userID) {
  return {
    type: FETCH_PROFILE,
    userID
  };
}
