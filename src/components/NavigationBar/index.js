import React, { Fragment, useState } from "react";
import {
  PrimaryButton,
  CommandButton,
  Icon,
  List
} from "office-ui-fabric-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationBarStyler, LogoStyler, MobileSideBarStyler } from "./style";
import { history } from "../../utils/history";
import { ROUTE, LIST } from "../../constants";
import { useLoginData } from "../../hooks/loginHook";

const NavigationBar = () => {
  const callLogout = useLoginData(store => store.callLogout);
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

  const renderMenuItem = (item, index) => {
    return (
      <div className="menu-item" onClick={() => history.push(item.url)}>
        <Icon iconName={item.iconName} />
        <span>{item.label}</span>
      </div>
    );
  };

  return (
    <Fragment>
      <NavigationBarStyler>
        <PrimaryButton
          className="sidebar-toggler"
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        >
          <Icon iconName="GlobalNavButton" title="Mở danh mục" />
        </PrimaryButton>
        <LogoStyler>M A K A</LogoStyler>
        <CommandButton className="profile-btn" menuProps={menu}>
          <FontAwesomeIcon className="mr-1" icon="user-circle" />
        </CommandButton>
      </NavigationBarStyler>
      <MobileSideBarStyler isOpen={isOpenMobileMenu}>
        <List items={LIST.MENU} onRenderCell={renderMenuItem} />
      </MobileSideBarStyler>
    </Fragment>
  );
};

export default NavigationBar;
