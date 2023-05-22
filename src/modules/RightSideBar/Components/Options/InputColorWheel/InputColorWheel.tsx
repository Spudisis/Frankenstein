import React from "react";
import { HeaderOptionsInput } from "src/UI";
import { SketchPicker } from "react-color";
import { WheelObject } from "./InputColorWheel.types";
import { WheelButton, WrapperWheel } from "./InputColorWheel.styles";
import { InputStyles, PropsInput } from "../Options.types";

export const InputColorWheel = React.memo(
  ({
    value,
    onChange,
    label,
    property
  }: InputStyles & PropsInput<"color" | "backgroundColor">) => {
    const [open, setOpen] = React.useState(false);
    const WheelRef = React.useRef<HTMLDivElement>(null);

    const onClickModal = (e: globalThis.MouseEvent) => {
      if (WheelRef.current && !WheelRef.current.contains(e.target as Node)) {
        return setOpen(false);
      }
      return null;
    };
    React.useEffect(() => {
      document.body.addEventListener("click", onClickModal);
      return () => document.body.removeEventListener("click", onClickModal);
    }, []);

    return (
      <div ref={WheelRef}>
        <HeaderOptionsInput>
          <label>{label}</label>
          <WheelButton
            bgcColor={value[property]}
            onClick={() => setOpen(!open)}
          ></WheelButton>
          <>
            {open && (
              <>
                <WrapperWheel>
                  <SketchPicker
                    color={value}
                    onChange={(e: WheelObject) => onChange(e.hex, property)}
                  />
                </WrapperWheel>
              </>
            )}
          </>
        </HeaderOptionsInput>
      </div>
    );
  }
);
