import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import NavigationBar from "../../../components/NavigationBar";
import SideBar from "../../../components/SideBar";
import { PageContentStyler } from "../style";
import { getAccessToken } from "../../../utils/storage";
import { ROUTE } from "../../../constants";

const PrivateRoute = ({ component = () => null, ...remains }) => {
  const Component = component;

  return (
    <Route
      {...remains}
      render={({ location }) => {
        return getAccessToken() ? (
          <Fragment>
            <NavigationBar />
            <SideBar />
            <PageContentStyler>
              <Component location={location} />
            </PageContentStyler>
          </Fragment>
        ) : (
          <Redirect to={ROUTE.SIGN_IN} />
        );
      }}
    />
  );
};

export default PrivateRoute;
