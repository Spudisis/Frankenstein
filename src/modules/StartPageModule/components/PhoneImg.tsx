import React from "react";
import { Image } from "../../../UI";
import phone from "../assets/phone.png";
import phoneAvif from "../assets/PhoneAvif.avif";
import phoneWebp from "../assets/PhoneWebp.webp";
export const PhoneImg = () => {
  return (
    <Image>
      <picture>
        <source srcSet={phoneAvif} type="image/avif" />
        <source srcSet={phoneWebp} type="image/webp" />
        <img src={phone} alt="phoneBgc" />
      </picture>
    </Image>
  );
};
