import { createIcon } from "@gluestack-ui/themed";
import { Path } from "react-native-svg";

export const SavedOutlineIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path
        fill="currentColor"
        d="M16 2H8a3.003 3.003 0 0 0-3 3v16.5a.5.5 0 0 0 .75.434l6.25-3.6l6.25 3.6A.5.5 0 0 0 19 21.5V5a3.003 3.003 0 0 0-3-3zm2 18.635l-5.75-3.312a.51.51 0 0 0-.5 0L6 20.635V5a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2v15.635z"
      />
    </>
  )
});
