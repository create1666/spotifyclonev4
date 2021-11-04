import "./Login.css"

import { loginUrl } from "../../Utils"

const Login = () => {
  
  return (
    <div className="login">
     <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-32.png" alt="" className="login_img" />
     <a href={loginUrl} className="btn_link">LOGIN WITH SPOTIFY 🐱‍👤</a>
    </div>
  )
}

export default Login
