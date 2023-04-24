import { observer } from "mobx-react-lite";
import React from "react";
import { StoreProfile } from "../../store";
import {
  OverlayStyle,
  PaymentRoot,
  ImageBack,
  InfoBlock,
  StyledSection,
  StyledNameTier,
  ChangeButton,
  BlockButton,
} from "./PaymentPlan.styles";
import standard from "../../assets/Standart.jpg";
import premium from "../../assets/premium.jpg";
import ultra from "../../assets/ultra.jpg";
import { PaymentBuff } from "../PaymentBuff";
export const PaymentPlan = observer(() => {
  const payment = StoreProfile.user?.tiers;
  if (!payment || !StoreProfile.user) {
    return null;
  }
  const selectImage =
    payment === "ULTRA"
      ? ultra
      : payment === "PREMIUM"
      ? premium
      : payment === "STANDART"
      ? standard
      : "";

  return (
    <PaymentRoot>
      <ImageBack img={selectImage} />
      <OverlayStyle />
      <InfoBlock>
        <StyledNameTier>
          Статус подписки: {StoreProfile.user.tiers}
        </StyledNameTier>
        <StyledSection>Действует до: </StyledSection>

        <PaymentBuff tier={StoreProfile.user.tiers} />
        <BlockButton>
          <ChangeButton>Сменить тариф</ChangeButton>
        </BlockButton>
      </InfoBlock>
    </PaymentRoot>
  );
});
