import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import LoginPage from "../Login";
import Homepage from "../Homepage";
import PrivateRoute from "./components/PrivateRoute";
import { AppStyler } from "./style";
import { history } from "../../utils/history";
import { ROUTE } from "../../constants";
import { getAccessToken } from "../../utils/storage";
import "../../styles/global.scss";
import LoginProvider from "../../contexts/loginContext";

const App = () => {
  return (
    <AppStyler>
      <LoginProvider>
        <Router history={history}>
          <Route
            exact
            strict
            path={ROUTE.LOGIN}
            render={() =>
              getAccessToken() ? (
                <Redirect to={ROUTE.HOMEPAGE} />
              ) : (
                <LoginPage />
              )
            }
          />
          <PrivateRoute exact path={ROUTE.HOMEPAGE} component={Homepage} />
          {/* <Route
          exact
          path="/"
          render={() =>
            getAccessToken() ? (
              <Redirect to={ROUTE.HOMEPAGE} />
            ) : (
              <Redirect to={ROUTE.LOGIN} />
            )
          }
        /> */}
        </Router>
      </LoginProvider>
    </AppStyler>
  );
};

export default App;
