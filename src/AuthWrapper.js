import { navigate } from "gatsby-link";
import React, { useEffect } from "react";

import { connect } from "react-redux";

import { getIsAuthenticated } from "./reducers/user";
function AuthWrapper({ children, isAuthenticated, isSignUp }) {
  useEffect(() => {
    if (!isAuthenticated && !isSignUp) {
      navigate("/page/account/login/");
    }
    if (isAuthenticated && isSignUp) {
      navigate("/dashboard/");
    }
  }, [isAuthenticated,isSignUp]);
  return <div>{children}</div>;
}
const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});
export default connect(mapStateToProps, null)(AuthWrapper);
