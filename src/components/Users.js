import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import UserView from "./UserView";

function Users({ location }) {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  // const location = "Chandigarh";
  useEffect(() => {
    if (location === "") {
      db.collection("registeredUsers")
        .where("state", "==", "Activate")
        .orderBy("timestamp")
        .onSnapshot((snapshot) => {
          setUsers(
            snapshot.docs.map((doc) => ({ id: doc.id, userInfo: doc.data() }))
          );
        });
    } else {
      db.collection("registeredUsers")
        .where("location", "==", location)
        .where("state", "==", "Activate")
        .orderBy("timestamp")
        .onSnapshot((snapshot) => {
          if (snapshot.empty) {
            console.log("No matching documents.");
            setUsers(
              snapshot.docs.map((doc) => ({ id: doc.id, userInfo: doc.data() }))
            );
            setMsg("No Result Found");
            //return;
          } else {
            setUsers(
              snapshot.docs.map((doc) => ({ id: doc.id, userInfo: doc.data() }))
            );
          }
        });
    }
    setMsg("");
  }, [location]);
  //   useEffect(() => {
  //     db.collection("registeredUsers").onSnapshot((snapshot) => {
  //       setUsers(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           item: doc.data(),
  //         }))
  //       );
  //     });
  //   }, []);
  return (
    <div className="user-row">
      {msg}
      {users.map(({ id, userInfo }) => {
        return <UserView key={id} userInfo={userInfo} />;
      })}
    </div>
  );
}

export default Users;
