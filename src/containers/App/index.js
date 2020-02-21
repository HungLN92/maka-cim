import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import LoginPage from "../Login";
import OfferPage from "../Offer";
import UserPage from "../User";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "../../components/Loading";
import { AppStyler } from "./style";
import LoginProvider from "../../contexts/loginContext";
import GlobalProvider from "../../contexts/globalContext";
import OfferProvider from "../../contexts/offerContext";
import { history } from "../../utils/history";
import { ROUTE } from "../../constants";
import { getAccessToken } from "../../utils/storage";
import "../../styles/global.scss";
import UserProvider from "../../contexts/userContext";

const App = () => {
  return (
    <AppStyler>
      <GlobalProvider>
        <LoginProvider>
          <OfferProvider>
            <UserProvider>
              <Router history={history}>
                <Route
                  exact
                  strict
                  path={ROUTE.LOGIN}
                  render={() =>
                    getAccessToken() ? (
                      <Redirect to={ROUTE.OFFER} />
                    ) : (
                      <LoginPage />
                    )
                  }
                />
                <PrivateRoute exact path={ROUTE.OFFER} component={OfferPage} />
                <PrivateRoute
                  exact
                  path={ROUTE.USER_MANAGEMENT}
                  component={UserPage}
                />
                <Route
                  exact
                  path={ROUTE.DEFAULT}
                  render={() =>
                    getAccessToken() ? (
                      <Redirect to={ROUTE.HOMEPAGE} />
                    ) : (
                      <Redirect to={ROUTE.LOGIN} />
                    )
                  }
                />
              </Router>
              <Loading />
            </UserProvider>
          </OfferProvider>
        </LoginProvider>
      </GlobalProvider>
    </AppStyler>
  );
};

export default App;
