import React from "react";
import { SideBarStyler } from "./style";
import { Nav, Icon } from "office-ui-fabric-react";
import { history } from "../../utils/history";
import { LIST } from "../../constants";

const SideBarItem = group => {
  return (
    <Icon
      iconName={group.iconName}
      title={group.label}
      onClick={() => history.push(group.url)}
    />
  );
};

const SideBar = () => {
  return (
    <SideBarStyler>
      <Nav onRenderGroupHeader={SideBarItem} groups={LIST.MENU} />
    </SideBarStyler>
  );
};

export default SideBar;
