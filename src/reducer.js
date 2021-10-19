export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  items: null,
  // token:
  // "BQDmqemEnI7nLvt_MgjfJ9zlBaIWioJ2WS9WxAR1EbAZd_jPld…ncytwZ-BOh-NqyYPq0CvhtVzO4J9NTvYMTfNwQRSVDH9te9lV",
};

export const reducer = (state, action) => {
  const { user, token, payload } = action;
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token,
      };
    case "SET_PLAYINGLIST":
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
