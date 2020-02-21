import React, { useRef, useEffect } from "react";
import { UserPageStyler } from "./style";
import { useUserData } from "../../hooks/userHook";
import { useObserver } from "mobx-react";
import { primaryColor } from "../../styles/variables";
import { HeaderText } from "../../styles/common";
import {
  Fabric,
  CommandBar,
  DetailsList,
  SelectionMode,
  DetailsListLayoutMode
} from "office-ui-fabric-react";
import { TABLE_CONFIG } from "../../constants";
import { useGlobalData } from "../../hooks/globalHook";

const UserPage = () => {
  const { users, setUsers, callGetUsers, resetStore } = useUserData(store => ({
    users: store.users,
    setUsers: store.setUsers,
    callGetUsers: store.callGetUsers,
    resetStore: store.resetStore
  }));
  const setLoading = useGlobalData(store => store.setLoading);
  const columnsRef = useRef();
  const usersRef = useRef();

  const handleColumnSort = (_, column) => {
    columnsRef.current = columnsRef.current.map(item => {
      return {
        ...item,
        isSorted: item.key === column.key,
        isSortedDescending: !item.isSortedDescending
      };
    });

    setUsers(
      usersRef.current
        .slice()
        .sort((a, b) => ((column.isSortedDescending ? a > b : a < b) ? 1 : -1))
    );
  };

  useEffect(() => {
    // Update user list reference when user list in store changed
    usersRef.current = usersRef;
  }, [users]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Initial request for user list
    try {
      setLoading(true);
      callGetUsers();
      setLoading(false);
    } catch {
      setLoading(false);
    }
    // Modify column configuration with sort action
    columnsRef.current = TABLE_CONFIG.USERS.map(column => ({
      ...column,
      onColumnClick: handleColumnSort
    }));

    return () => {
      resetStore();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useObserver(() => (
    <UserPageStyler>
      <HeaderText bold className="mb-4" colorHex={primaryColor}>
        Danh Sách Người Dùng
      </HeaderText>
      <Fabric>
        <CommandBar
          items={[
            {
              key: "user_action_1",
              text: "Tạo mới",
              iconProps: { iconName: "Add" }
            }
          ]}
          className="user-action-bar"
        />
        <DetailsList
          items={users}
          columns={columnsRef.current}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
        />
      </Fabric>
    </UserPageStyler>
  ));
};

export default UserPage;
