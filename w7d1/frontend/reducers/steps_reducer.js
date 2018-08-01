import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from "../actions/step_actions";

const stepsReducer = (state = {}, action) => {
  switch(action.type) {
    // case RECEIVE_STEPS:
    //   const steps = {};
    //   action.steps.forEach(step => {
    //     steps[step.id] = step;
    //   });
    //   return steps;
    // case RECEIVE_STEP:
    //
    // case REMOVE_STEP:

    default:
      return state;
  }
};

export default stepsReducer;
