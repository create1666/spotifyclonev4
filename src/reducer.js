export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  items: null,
  weeklyPlaylist: {},
  track: null,

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
    case "SET_PLAYINGLIST": {
      console.log(payload, "yyyyyyyy");
      return {
        ...state,
        playlists: payload.items,
      };
    }

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        weeklyPlaylist: payload,
      };

    case "PLAY_TRACK":
      return {
        ...state,
        playing: true,
      };

    case "PAUSE_TRACK":
      return {
        ...state,
        playing: false,
      };
    default:
      return state;
  }
};
