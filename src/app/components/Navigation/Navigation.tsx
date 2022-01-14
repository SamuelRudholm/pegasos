import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../providers/authentication/FirebaseAuthProvider/FirebaseProvider";

export const Navigation = () => {
  return (
    <AppContext.Consumer>
      {({ auth }) => {
        return (
          <div className="list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              {auth ? (
                <Link to="about">Sign out</Link>
              ) : (
                <Link to="about">Sign In</Link>
              )}
            </ul>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
