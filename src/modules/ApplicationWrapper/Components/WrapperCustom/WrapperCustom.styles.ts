import { Option } from "src/domains";
import styled from "styled-components";

export const WrapperStyledDiv = styled.div<Option>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "1px solid black"};
  outline: none;
  border-radius: ${(props) => props.borderRadius || "5px"};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor || "white"};
  padding: ${(props) => props.padding || "2px"};
  margin: ${(props) => props.margin || "0px"};
`;