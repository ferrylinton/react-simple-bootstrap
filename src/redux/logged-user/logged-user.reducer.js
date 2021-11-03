const INITIAL_STATE = {
  loggedUser: null
};

const sidebarReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'SET_LOGGED_USER':
      return {
        ...state,
        loggedUser: action.payload
      };
    default:
      return state;
  }

};

export default sidebarReducer;
