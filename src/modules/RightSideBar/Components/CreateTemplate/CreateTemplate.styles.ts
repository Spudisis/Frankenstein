import styled from "styled-components";
import Select from "react-select";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  transition: 0.3s ease all;
`;

export const StyledForm = styled.form<{ view: boolean }>`
  background-color: var(--color-bgc-button-active);
  height: auto;

  width: 100%;
  padding: 10px;
  display: ${(props) => (props.view ? "flex" : "none")};
  flex-direction: column;
`;
export const InputText = styled.input`
  background-color: inherit;
  border-radius: 10px;
  border: 2px solid var(--color-bgc-sidebar);

  padding: 5px;
  width: 100%;
  color: white;
`;

export const Label = styled.label`
  width: 100%;
  color: white;
  margin: 5px 0px;
  font-size: 18px;
`;
export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;
export const Button = styled.button`
  width: 100%;
  background-color: #141414;

  border-radius: 10px;
  outline: none;
  border: none;
  color: white;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;

  @media screen and (hover: hover) {
    &:hover {
      transition: 0.2s ease;
      background-color: black;
    }
  }
  &:disabled {
    background-color: #2b2b2b;
    cursor: wait;
  }
`;
export const CustomSelect = styled(Select)`
  color: black;
  z-index: 1001;
  & .Select__indicator .Select__dropdown-indicator {
    color: black;
  }
`;
