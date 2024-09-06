import {
  VisitorsState,
  VisitorsTypes,
  SET_VISITORS,
  SET_RESET_VISITORS,
  SET_VISITOR_ADD,
  SET_VISITOR_REMOVE,
  SET_VISITOR_CHECKOUT,
} from "./visitors.types";

const initialState: VisitorsState = {
  visitors: [],
  history: [],
};

const visitorsReducer = (state = initialState, action: VisitorsTypes) => {
  switch (action.type) {
    case SET_VISITORS:
      return {
        ...state,
        visitors: action.payload,
      };
    case SET_RESET_VISITORS:
      return {
        ...state,
        visitors: [],
      };
    case SET_VISITOR_ADD: {
      const { visitors } = { ...state };

      const _visitors = visitors ? [...visitors] : [];

      const currentDateTime = new Date().toLocaleString();

      const newId = visitors.length ? visitors.length + 1 : 1;

      _visitors.push({
        ...action.payload,
        id: newId,
        startDateTime: currentDateTime,
      });

      return {
        ...state,
        visitors: _visitors,
      };
    }
    case SET_VISITOR_REMOVE: {
      const { visitors } = { ...state };

      const index = visitors.indexOf(action.payload);

      visitors.splice(index, 1);

      return {
        ...state,
        visitors: visitors,
      };
    }
    case SET_VISITOR_CHECKOUT: {
      const { history, visitors } = { ...state };

      let _visitors = visitors ? [...visitors] : [];
      _visitors = _visitors.filter(
        (visitor) => visitor.id !== action.payload.id
      );

      const _history = history ? [...history] : [];

      const currentDateTime = new Date().toLocaleString();

      _history.push({
        ...action.payload,
        endDateTime: currentDateTime,
      });

      return {
        ...state,
        history: _history,
        visitors: _visitors,
      };
    }
    default:
      return state;
  }
};

export default visitorsReducer;
