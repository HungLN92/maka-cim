import React, { useEffect, useState, Fragment } from "react";
import { DetailsStyler, DialogModalStyler } from "./style";
import { useOfferData } from "../../../../hooks/offerHook";
import {
  ActionButton,
  Label,
  ChoiceGroup,
  PrimaryButton,
  IconButton
} from "office-ui-fabric-react";
import { ColorText } from "../../../../styles/common";
import { primaryColor } from "../../../../styles/variables";
import { useGlobalData } from "../../../../hooks/globalHook";
import { ENUM, LIST, ROUTE } from "../../../../constants";
import { formatTime } from "../../../../utils/misc";
import Chatbox from "../../../../components/Chatbox";
import { history } from "../../../../utils/history";

const Details = () => {
  const { offerId, chosenOffer, setOffer, callGetOfferById } = useOfferData(
    store => ({
      offerId: store.offerId,
      chosenOffer: store.chosenOffer,
      setOffer: store.setOffer,
      callGetOfferById: store.callGetOfferById
    })
  );
  const setLoading = useGlobalData(store => store.setLoading);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      callGetOfferById(offerId);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, [setLoading, callGetOfferById, offerId]);

  return (
    <Fragment>
      <DetailsStyler>
        <ActionButton
          iconProps={{ iconName: "Back" }}
          onClick={() => {
            history.push({
              pathname: ROUTE.OFFER,
              search: ""
            });
            setOffer("");
          }}
        >
          Quay lại danh sách
        </ActionButton>
        <div className="details-container">
          <div>
            <div className="details-info-row">
              <Label>Mã:</Label>
              <ColorText colorHex={primaryColor}>{chosenOffer.id}</ColorText>
            </div>
            <div className="details-info-row">
              <Label>Quảng cáo:</Label>
              <ColorText colorHex={primaryColor}>{chosenOffer.order}</ColorText>
            </div>
            <div className="details-info-row">
              <Label>Loại giao dịch:</Label>
              <ColorText colorHex={primaryColor}>
                {chosenOffer.type === ENUM.OFFER_TYPE.BUY ? "Mua" : "Bán"}
              </ColorText>
            </div>
            <div className="details-info-row">
              <Label>Tên coin:</Label>
              <ColorText colorHex={primaryColor}>{chosenOffer.token}</ColorText>
            </div>
            <div className="details-info-row">
              <Label>Số lượng:</Label>
              <ColorText colorHex={primaryColor}>
                {chosenOffer.amount}
              </ColorText>
            </div>
            <div className="details-info-row">
              <Label>Mức giá:</Label>
              <ColorText colorHex={primaryColor}>{chosenOffer.price}</ColorText>
            </div>
            <hr />
            <div className="details-info-row">
              <Label>Trạng thái:</Label>
              <ColorText colorHex={ENUM.OFFER_STATUS_COLOR[chosenOffer.status]}>
                {
                  (
                    LIST.OFFER_STATUS_FILTERS.find(
                      opt => opt.value === chosenOffer.status
                    ) || {}
                  ).label
                }
              </ColorText>
            </div>
            <div className="details-info-row">
              <Label>Ngày tạo:</Label>
              <ColorText colorHex={primaryColor}>
                {formatTime(chosenOffer.createdTime)}
              </ColorText>
            </div>
            <div className="details-info-row">
              <Label>Lần cập nhật cuối:</Label>
              <ColorText colorHex={primaryColor}>
                {formatTime(chosenOffer.updatedTime)}
              </ColorText>
            </div>
            <hr />
            <ChoiceGroup
              label="Bạn xử ai thắng?"
              defaultSelectedKey="maker"
              options={[
                {
                  key: "maker",
                  text: `Người tạo: ${chosenOffer.maker}`,
                  iconProps: { iconName: "FollowUser" }
                },
                {
                  key: "taker",
                  text: `Người nhận: ${chosenOffer.taker}`,
                  iconProps: { iconName: "UserFollowed" }
                }
              ]}
              className="winner-choices"
            />
            <div className="mt-4">
              <PrimaryButton className="py-3 w-100">Xác Nhận</PrimaryButton>
            </div>
          </div>
          <div className="chatbox">
            <Chatbox />
          </div>
          <IconButton
            className="chatbox-toggler"
            iconProps={{ iconName: "ChatSolid" }}
            onClick={() => setIsOpenDialog(true)}
          />
        </div>
        <DialogModalStyler
          isOpen={isOpenDialog}
          onDismiss={() => setIsOpenDialog(false)}
        >
          <div className="p-2 text-right">
            <IconButton
              iconProps={{ iconName: "Cancel" }}
              onClick={() => setIsOpenDialog(false)}
            />
          </div>
          <div className="modal-chatbox">
            <Chatbox />
          </div>
        </DialogModalStyler>
      </DetailsStyler>
    </Fragment>
  );
};

export default Details;
