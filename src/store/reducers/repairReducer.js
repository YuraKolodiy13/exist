import {
  SEARCH_BY_VIN_SUCCESS, SEARCH_DETAIL, SECOND_SEARCH_BY_VIN,
} from "../actions/actionType";

const initialState = {
  generalInfo: [],
  fullInfo: [],
  detailInfo: [],
  // loading: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type){

    case SEARCH_BY_VIN_SUCCESS:
      return {
        ...state,
        fullInfo: [],
        generalInfo: action.payload,
        // loading: false
      };
    case SECOND_SEARCH_BY_VIN:
      return {
        ...state,
        fullInfo: action.payload,
        // loading: false
      };
    case SEARCH_DETAIL:
      return {
        ...state,
        detailInfo: action.payload,
        // loading: false
      };

    default:
      return state
  }
};

export default postReducer