import { Grid, Pictures } from "../../UI";

import { CustomDNDHook } from "../CustomDNDHook";

export const PicturesRows = ({ masImg, type }: { masImg: any[]; type: string }) => {
  return (
    <Grid columns="repeat(2, 1fr)" rowGap="10px">
      {masImg.map((elem, index) => {
        const options = elem.options;
        const DND = CustomDNDHook({ name: type, options });

        return (
          <Pictures
            refDrag={DND.drag}
            isDragging={DND.isDragging}
            src={elem.src}
            alt={elem.alt}
            name={elem.options.name}
            key={index}
          />
        );
      })}
    </Grid>
  );
};
