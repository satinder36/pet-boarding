import React, { useEffect, useState } from "react";
import NewFile from "./NewFile";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import firebase from "firebase";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import NativeSelect from "@material-ui/core/NativeSelect";

import "../styles/profile.css";
import GoogleMaps from "./LocationMap";
function Profile({ user }) {
  // const [user, setUser] = useState({
  //   displayName: "Alexa",
  //   email: "test@gmail.com",
  //   emailVerified: true,
  //   phoneNumber: null,
  //   photoURL:
  //     "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg",
  // });
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState("");
  const [state, setState] = useState("Activate");
  useEffect(() => {
    db.collection("registeredUsers")
      .doc(user.email)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setLoading("Loading  ");
          console.log("Document data:", doc.data());
          const item = doc.data();
          console.log(item, "item");
          setName(item.name);
          setContact(doc.data().contact);
          setAbout(doc.data().about);
          setLocation(doc.data().location);
        } else {
          setLoading("Please set your  ");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
    setTimeout(function () {
      setLoading("");
    }, 1000);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };
  const setProfile = (e) => {
    e.preventDefault();
    //.doc(user.email)
    db.collection("registeredUsers")
      .doc(user.email)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          db.collection("registeredUsers").doc(user.email).update({
            id: user.email,
            name: name,
            about: about,
            contact: contact,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.email,
            location: location,
            state: state,
          });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          db.collection("registeredUsers").doc(user.email).set({
            id: user.email,
            name: name,
            about: about,
            contact: contact,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.email,
            location: location,
            state: state,
          });
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    setMessage("Thank you for submitting the form");
    setTimeout(function () {
      setMessage("");
    }, 3000);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  //   const styles = theme => ({
  //     textField: {
  //        width:"70px"
  //     }
  // });
  const classes = useStyles();
  return (
    <div className="profile">
      {loading}
      Profile
      <NewFile email={user.email} />
      <form className="" noValidate autoComplete="off">
        <div className="text-fld">
          <TextField
            className="txt"
            id="standard-basic"
            placeholder="Enter a name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="text-fld">
          <TextField
            className="txt"
            id="standard-basic"
            placeholder="Enter a contact"
            type="number"
            max={10}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="text-fld">
          <TextField
            className="txt"
            id="standard-basic"
            placeholder="Enter your location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* <GoogleMaps /> */}
        </div>
        <div className="text-fld">
          <TextField
            className="txt"
            id="standard-basic"
            placeholder="Enter about yourself"
            type="text"
            value={about}
            rows={5}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <div className="text-fld">
          <InputLabel>Acivate / Deactivate account anytime</InputLabel>
          <NativeSelect
            value={state.age}
            onChange={handleChange}
            className="txt"
            placeholder="Acivate/Deactivate account anytime"
          >
            {/* <option aria-label="None" value="" /> */}
            <option value={"Acivate"}>Acivate</option>
            <option value={"Deactivate"}>Deactivate</option>
          </NativeSelect>
        </div>
        <Button
          className="app_iconButton"
          disabled={!name || !contact || !about || !location}
          variant="contained"
          color="primary"
          type="submit"
          onClick={setProfile}
        >
          Submit
        </Button>
      </form>
      <div className="msg">{message}</div>
    </div>
  );
}

export default Profile;
