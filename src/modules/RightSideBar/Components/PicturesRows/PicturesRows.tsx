import { Grid } from "src/UI";
import { Picture } from "./Picture";
import { StyledButton } from "./PicturesRows.styles";
import { observer } from "mobx-react-lite";
import { TemplateType } from "src/domains";
import { PicturesTypeStore } from "../../store/store";

export const PicturesRows = observer(
  ({
    masImg,
    type,
    store,
  }: {
    masImg: TemplateType[];
    type: string;
    store: PicturesTypeStore;
  }) => {
    const handleClick = () => {
      store.open = !store.open;
    };
    return (
      <>
        <StyledButton onClick={() => handleClick()}>{type}</StyledButton>
        {store.open && (
          <Grid open={store.open} columns="repeat(2, 1fr)" rowGap="10px">
            {masImg.map((elem, index) => {
              return <Picture elem={elem} type={type} key={elem.id} />;
            })}
          </Grid>
        )}
      </>
    );
  }
);
