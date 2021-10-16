export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  items: null,
}

export const reducer = (state, action) => {
  const {user} = action;
  console.log(action);
 switch (action.type) {
   case 'SET_USER':
     return {
       ...state,
       user: user
     } 
     default:
       return state;
 }
}