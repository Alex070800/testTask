import { setProgressValue } from "./action";

const defaultState = {
  progressValue: 0,
};
export const progressReducer = (_state = defaultState, _action: any) => {
  switch (_action.type) {
    case setProgressValue.type: {
      console.log(_action.payload);
      return { ..._state, progressValue: _action.payload };
    }
    default: {
      return _state;
    }
  }
};
