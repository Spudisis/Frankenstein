import React from "react";
import { MiniatureProjects } from "src/domains";
import { Image, Info, LastEdit, Title, Wrapper } from "./item.styles";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import placeholder from "src/assets/placeholder.png";
import { BUILD_URL } from "src/routes/urlsPages";

export const Item = ({ id, name, latestUpd, img }: MiniatureProjects) => {
  //СМЕНИТЬ ПУТЬ
  return (
    <Link to={BUILD_URL + id}>
      <Wrapper>
        <Image src={img ? img : placeholder} alt={"project miniature"} />
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
