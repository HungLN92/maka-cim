import React, { Fragment, useState, useEffect } from "react";
import {
  PrimaryButton,
  CommandButton,
  Icon,
  List
} from "office-ui-fabric-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavigationBarStyler,
  LogoStyler,
  MobileSideBarStyler,
  WelcomeTextStyler
} from "./style";
import { history } from "../../utils/history";
import { ROUTE, LIST } from "../../constants";
import { useLoginData } from "../../hooks/loginHook";
import { useGlobalData } from "../../hooks/globalHook";
import { useUserData } from "../../hooks/userHook";
import { ColorText } from "../../styles/common";
import { whiteColor } from "../../styles/variables";

const NavigationBar = () => {
  const callLogout = useLoginData(store => store.callLogout);
  const { userDetails, callGetUserDetails } = useUserData(store => ({
    userDetails: store.userDetails,
    callGetUserDetails: store.callGetUserDetails
  }));
  const setLoading = useGlobalData(store => store.setLoading);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleLogout = () => {
    callLogout();
  };

  const menu = {
    items: [
      {
        key: "personalInfoOption",
        text: "Thông tin cá nhân",
        iconProps: { iconName: "AccountManagement" },
        onClick: () => history.push(ROUTE.PERSONAL_INFO)
      },
      {
        key: "signOutOption",
        text: "Đăng xuất",
        iconProps: { iconName: "SignOut" },
        onClick: handleLogout
      }
    ]
  };

  const renderMenuItem = item => {
    return (
      <div
        className={`menu-item${
          window.location.pathname === item.url ? " active" : ""
        }`}
        onClick={() => history.push(item.url)}
      >
        <Icon iconName={item.iconName} />
        <span>{item.label}</span>
      </div>
    );
  };

  useEffect(() => {
    try {
      setLoading(true);
      callGetUserDetails();
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, [setLoading, callGetUserDetails]);

  return (
    <Fragment>
      <NavigationBarStyler>
        <PrimaryButton
          className="sidebar-toggler"
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        >
          <Icon iconName="GlobalNavButton" title="Mở danh mục" />
        </PrimaryButton>
        <LogoStyler onClick={() => history.push(ROUTE.OFFER)}>
          M A K Admin
        </LogoStyler>
        <div className={["d-flex", "align-items-center"].join(" ")}>
          <WelcomeTextStyler>
            <ColorText colorHex={whiteColor}>
              {`Xin chào, `}
              <ColorText bold>{userDetails.username}</ColorText>
            </ColorText>
          </WelcomeTextStyler>
          <CommandButton className="profile-btn" menuProps={menu}>
            <FontAwesomeIcon className="mr-1" icon="user-circle" />
          </CommandButton>
        </div>
      </NavigationBarStyler>
      <MobileSideBarStyler isOpen={isOpenMobileMenu}>
        <List items={LIST.MENU} onRenderCell={renderMenuItem} />
      </MobileSideBarStyler>
    </Fragment>
  );
};

export default NavigationBar;
