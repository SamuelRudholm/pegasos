import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../providers/authentication/FirebaseAuthProvider/FirebaseProvider";

export const Navigation = () => {
  return (
    <AppContext.Consumer>
      {({ auth }) => {
        if (auth) {
          return (
            <div className="list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
              </ul>
            </div>
          );
        }
        return <h1>You need to sign in</h1>;
      }}
    </AppContext.Consumer>
  );
};
