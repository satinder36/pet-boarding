import "./App.css";
import Header from "./components/Header";
import petBoarding from "./media/petBoarding.jpg";
import { storage, db, auth, provider } from "./firebase";
import NewFile from "./components/NewFile";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import { useState } from "react";
import { Button } from "@material-ui/core";
function App() {
  //const [user, setUser] = useState("");
  // const handleLogin = () => {
  //   if (!user) {
  //     auth.signInWithPopup(provider).then((result) => {
  //       setUser(result.user);
  //     });
  //   }
  // };
  const [user, setUser] = useState({
    displayName: "Alexa",
    email: "ssatinder1996@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL:
      "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg",
  });
  console.log(user.email, "useremail");
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          {user ? (
            <Route path="/profile">
              <Profile user={user} />
            </Route>
          ) : (
            <div className="app__login">
              {/* <Button onClick={handleLogin}>Login</Button> */}
            </div>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
