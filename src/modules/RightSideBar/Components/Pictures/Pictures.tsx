import { observer } from "mobx-react-lite";

import { PicturesRows } from "../../../../components/PicturesRows/PicturesRows";

import { CreateId } from "../../../../components";
import { ItemTypesDND } from "../../../../components/CustomDNDHook";
export const Pictures = observer(() => {
  const masImg = [
    {
      src: "https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg",
      alt: "dad",

      options: {
        name: "header1",
        namePrivate: "Header",
        id: "a1411",
        options: {
          height: "50px",
          backgroundColor: "red",
        },
        modules: [
          {
            name: "5111кпвы",
            namePrivate: "Button",
            options: {
              name: "but9",
              height: "50px",
              width: "90px",
            },
            id: CreateId(),
          },
        ],
      },
    },
    {
      src: "https://img1.goodfon.ru/wallpaper/nbig/a/69/kartinka-3d-dikaya-koshka.jpg",
      alt: "dad",

      options: {
        name: "header2",
        namePrivate: "Header",
        id: "dsfjh56jq34",
        options: {
          height: "60px",
          backgroundColor: "black",
          color: "white",
        },
        modules: [
          {
            name: "5111кпвы",
            namePrivate: "Button",
            options: {
              name: "but9",
              height: "50px",
              width: "90px",
            },
            id: CreateId(),
          },
          {
            name: "5111кпвы",
            namePrivate: "Button",
            options: {
              name: "but9",
              height: "50px",
              width: "90px",
            },
            id: CreateId(),
          },
          {
            name: "5111кпвы",
            namePrivate: "Button",
            options: {
              name: "but9",
              height: "50px",
              width: "90px",
            },
            id: CreateId(),
          },
        ],
      },
    },
  ];
  const masImg2 = [
    {
      src: "https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg",
      alt: "dad",

      options: {
        name: "Footer1",
        namePrivate: "Footer",
        id: "a1411ыврфыпыв",
        options: {
          height: "50px",
          backgroundColor: "red",
        },
        modules: [
          {
            name: "5111кпвы",
            namePrivate: "Button",
            options: {
              name: "but9",
              height: "50px",
              width: "90px",
            },
            id: CreateId(),
          },
        ],
      },
    },
    {
      src: "https://img1.goodfon.ru/wallpaper/nbig/a/69/kartinka-3d-dikaya-koshka.jpg",
      alt: "dad",

      options: {
        name: "Footer2",
        namePrivate: "Footer",
        id: "dsfjh56jq34",
        options: {
          height: "60px",
          backgroundColor: "black",
          color: "white",
        },
        modules: [
          {
            name: "5111кпвы",
            namePrivate: "Button",
            options: {
              name: "but9",
              height: "50px",
              width: "90px",
            },
            id: CreateId(),
          },
          {
            name: "5111кпвы",
            namePrivate: "Button",
            options: {
              name: "but9",
              height: "50px",
              width: "90px",
            },
            id: CreateId(),
          },
          {
            name: "5111кпвы",
            namePrivate: "Button",
            options: {
              name: "but9",
              height: "50px",
              width: "90px",
            },
            id: CreateId(),
          },
        ],
      },
    },
  ];
  return (
    <>
      <PicturesRows type={ItemTypesDND.Header} masImg={masImg} />
      <PicturesRows type={ItemTypesDND.Footer} masImg={masImg2} />
    </>
  );
});
