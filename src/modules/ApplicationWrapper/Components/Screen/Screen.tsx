import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { AbsoluteWrapperBlock, FooterMobile, HeaderMobile, MobileMain, ScreenStyle, Wrapper } from "../../../../UI";
import { ParamsScreen } from "../../../../UI/ScreenStyled/ScreenStyled";
import Application, { ScreenMas, typeFH } from "../../../../store/Application";

import { MainFooter } from "../../../../ModulesConstructor/Footers/MainFooter";
import { MainHeader } from "../../../../ModulesConstructor";
import { CustomDNDHook } from "../../../../components";
import { useDrop } from "react-dnd";

type ScreenProps = ParamsScreen & { elem: any };

export const Screen = observer(({ margin, elem }: ScreenProps) => {
  const header = Application.ApplicationHeader;
  const footer = Application.ApplicationFooter;
  const [_, drop]: any = useDrop(() => ({
    accept: "Header",
    drop: (item: ScreenMas) => SetNewHeader(typeFH.Header, item),
  }));
  const [_F, dropFooter]: any = useDrop(() => ({
    accept: "Footer",
    drop: (item: ScreenMas) => SetNewHeader(typeFH.Footer, item),
  }));

  const SetNewHeader = (type: typeFH, item: any) => {
    console.log(type);
    Application.changeFooterHeader(type, item);
  };

  return (
    <ScreenStyle margin={margin}>
      <Wrapper justify="space-between" direction="column" height="100%" position="relative">
        {Object.keys(header).length !== 0 ? (
          <HeaderMobile refDrag={drop}>
            <MainHeader {...header} />
          </HeaderMobile>
        ) : (
          <AbsoluteWrapperBlock refDrag={drop} top={"0px"}></AbsoluteWrapperBlock>
        )}

        <MobileMain>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et explicabo adipisci corrupti dolor, ipsum
            tenetur at dolores ad voluptas, accusamus a corporis praesentium tempore repudiandae? Soluta, at quae
            dignissimos est repellendus quod. Labore saepe odio, ipsa ea enim unde, quidem aut non nam corporis illo,
            repudiandae error reiciendis nemo natus neque eum tempora quasi harum rem hic dolores sit sed. Doloribus
            animi accusamus nam exercitationem iure necessitatibus in laboriosam? Libero labore magni nihil esse totam,
            illum numquam nam et officiis. Sit porro at amet ab sint nam molestiae eos minus, nihil aspernatur incidunt
            nobis quasi rerum nemo consectetur, est numquam fugiat consequatur in, maxime possimus optio cumque culpa
            deserunt. Dolorem voluptatibus magni dolorum libero, repudiandae nam ipsa vel officiis dolores est iure,
            quae alias minima beatae quaerat temporibus provident, tempora fugit ipsum facere qui neque! Soluta nam
            sapiente adipisci consequatur voluptatem tempora, impedit dolores voluptas sunt rem enim harum fugiat
            exercitationem sed accusamus deleniti. Esse ullam optio ducimus assumenda error molestias illum itaque
            nobis! Distinctio illo inventore quo nobis minus reprehenderit pariatur maxime! Maxime sint consequuntur
            beatae. Excepturi atque, obcaecati qui unde iste modi aperiam illum tempora consequuntur quo voluptatem
            accusamus, consectetur amet nemo velit sed reiciendis dignissimos beatae odio tempore ducimus nesciunt hic.
            Voluptatibus adipisci in laudantium. Nam incidunt ipsum veniam, suscipit tenetur cum magni quidem deleniti
            obcaecati illo fuga sit ipsa nihil dolor animi fugit? Nesciunt iure sit odit! Vitae eligendi consectetur
          </div>
        </MobileMain>

        {Object.keys(footer).length !== 0 ? (
          <FooterMobile refDrag={dropFooter}>
            <MainFooter {...footer} />
          </FooterMobile>
        ) : (
          <AbsoluteWrapperBlock refDrag={dropFooter} bottom={"0px"}></AbsoluteWrapperBlock>
        )}
      </Wrapper>
    </ScreenStyle>
  );
});
// 360 / 760
