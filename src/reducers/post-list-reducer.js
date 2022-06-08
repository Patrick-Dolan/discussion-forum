function Reducer(state = {}, action) {
  const {title, author, date, postBody, id} = action;
  switch (action.type) {
    case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        date: date,
        postBody: postBody,
        id: id
      }
    });
    case 'DELETE_POST':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default Reducer;