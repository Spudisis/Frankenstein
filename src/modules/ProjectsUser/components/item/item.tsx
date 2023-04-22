import React from "react";
import { MiniatureProjects } from "src/domains";
import { Image, Info, LastEdit, Title, Wrapper } from "./item.styles";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

export const Item = ({ name, latestUpd, img }: MiniatureProjects) => {
  //СМЕНИТЬ ПУТЬ
  return (
    <Link to={"/aboba"}>
      <Wrapper>
        <Image src={img} alt={"project miniature"} />
        <Info>
          <Title>{name}</Title>
          <LastEdit>
            <Trans i18nKey="UsersProjects.lastUpd">Последнее обновление:</Trans>
            {latestUpd}
          </LastEdit>
        </Info>
      </Wrapper>
    </Link>
  );
};
