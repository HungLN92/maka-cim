import React from "react";
import { ColorText } from "../styles/common";
import { primaryColor } from "../styles/variables";
import { formatTime } from "../utils/misc";
import { ENUM, LIST } from ".";
import { IconButton } from "office-ui-fabric-react";

export default {
  OFFER: [
    {
      key: "column1",
      name: "Đơn hàng",
      iconClassName: "mr-2",
      iconName: "ClipboardList",
      fieldName: "id",
      minWidth: 70,
      maxWidth: 250,
      isRowHeader: true,
      isResizable: true,
      isPadded: true,
      onRender: item => {
        return (
          <ColorText bold colorHex={primaryColor}>
            {item.id}
          </ColorText>
        );
      }
    },
    {
      key: "column2",
      name: "Tên Coin",
      iconClassName: "mr-2",
      iconName: "ProHockey",
      fieldName: "token",
      minWidth: 70,
      maxWidth: 130,
      isResizable: true,
      isPadded: true
    },
    {
      key: "column3",
      name: "Trạng thái",
      iconClassName: "mr-2",
      iconName: "NumberedList",
      fieldName: "status",
      minWidth: 80,
      maxWidth: 100,
      isResizable: true,
      isPadded: true,
      onRender: item => {
        return (
          <ColorText colorHex={ENUM.OFFER_STATUS_COLOR[item.status]}>
            {
              (
                LIST.OFFER_STATUS_FILTERS.find(
                  opt => opt.value === item.status
                ) || {}
              ).label
            }
          </ColorText>
        );
      }
    },
    {
      key: "column4",
      name: "Người tạo",
      iconClassName: "mr-2",
      iconName: "FollowUser",
      fieldName: "maker",
      minWidth: 150,
      maxWidth: 170,
      isResizable: true,
      isPadded: true
    },
    {
      key: "column5",
      name: "Người nhận",
      iconClassName: "mr-2",
      iconName: "UserFollowed",
      fieldName: "taker",
      minWidth: 150,
      maxWidth: 170,
      isResizable: true,
      isPadded: true
    },
    {
      key: "column6",
      name: "Ngày cập nhật",
      iconClassName: "mr-2",
      iconName: "Clock",
      fieldName: "updatedTime",
      minWidth: 120,
      maxWidth: 150,
      isResizable: true,
      isPadded: true,
      onRender: item => {
        return formatTime(item.updatedTime);
      }
    }
  ],
  USERS: [
    {
      key: "column1",
      name: "Tài khoản",
      iconClassName: "mr-2",
      iconName: "Contact",
      fieldName: "userName",
      minWidth: 250,
      maxWidth: 550,
      isRowHeader: true,
      isResizable: true,
      isPadded: true
    },
    {
      key: "column2",
      name: "Ngày khởi tạo",
      iconClassName: "mr-2",
      iconName: "Clock",
      fieldName: "createdTime",
      minWidth: 120,
      maxWidth: 400,
      isResizable: true,
      isPadded: true,
      onRender: item => formatTime(item.createdTime)
    },
    {
      key: "column3",
      name: "",
      fieldName: "actions",
      minWidth: 120,
      maxWidth: 150,
      isResizable: true,
      isPadded: true,
      onRender: () => {
        return (
          <div className={["d-flex", "align-items-center"].join(" ")}>
            <IconButton
              iconProps={{ iconName: "Info" }}
              title="Chi tiết"
              className="mr-3"
            />
            <IconButton
              iconProps={{ iconName: "Edit" }}
              title="Sửa đổi"
              className="mr-3"
            />
            <IconButton iconProps={{ iconName: "Delete" }} title="Xóa" />
          </div>
        );
      }
    }
  ]
};
