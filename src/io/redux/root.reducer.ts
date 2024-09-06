import { combineReducers } from "redux";

import theme from "./theme/theme.reducer";
import user from "./user/user.reducer";
import visitors from "./visitors/visitors.reducer";

const rootReducer = combineReducers({
  theme,
  user,
  visitors,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
