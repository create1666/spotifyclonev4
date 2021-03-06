export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientid = "5e6bb756b7724c5aa309cd24d529fa11";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenUrl = () => {
  // grabs the token from the window's url
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initialState, item) => {
      let newArray = item.split("=");
      initialState[newArray[0]] = decodeURIComponent(newArray[1]);
      return initialState;
    }, {});
};
