import { ContentWrapper } from "src/UI/SideBar/Content/Content";
import { Button, Wrapper } from "src/UI";

import { TypeContent } from "./Content.types";
import { ParamsProject } from "../ParamsProject";
import { ListItems } from "../ListItems";

export const Content = ({ overflow, section, setSection }: TypeContent) => {
  return (
    <ContentWrapper overflow={overflow}>
      <Wrapper height="auto" borderBottom={"1px solid black"} padding="0px">
        <Button
          name="Project"
          changeProp={setSection}
          prop={false}
          padding="0px"
          margin="10px 0px"
          active={section === false}
        ></Button>
        <Button
          name="Layouts"
          changeProp={setSection}
          prop={true}
          padding="0px"
          margin="10px 0px"
          active={section === true}
        ></Button>
      </Wrapper>
      {section ? <ListItems /> : <ParamsProject />}
    </ContentWrapper>
  );
};
