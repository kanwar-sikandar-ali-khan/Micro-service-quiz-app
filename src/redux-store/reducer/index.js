
const initial_state = {

  cardList: [],
  loggedIn: false,

};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return { ...state, loggedIn: action.loggedIn };

    default:
      return state;
  }
}
