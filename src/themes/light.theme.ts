import { DefaultTheme } from "styled-components";

import { borderRadius } from "./tokens/border.token";
import breakpoint from "./tokens/breakpoint.token";
import { lightThemeButton } from "./tokens/button.token";
import color from "./tokens/color.token";
import { fontFamily, fontWeight, fontSize } from "./tokens/font.token";
import { lightThemeInput } from "./tokens/input.token";
import { lightThemeAlert } from "./tokens/alert.token";

const lightTheme: DefaultTheme = {
  theme: "light",
  color,

  font: {
    family: fontFamily,
    weight: fontWeight,
    color: {
      primary: color.black,
      secondary: color.darkGray,
    },
    size: fontSize,
  },

  border: {
    radius: borderRadius,
    color: color.lightGray,
  },

  breakpoint,

  background: {
    color: {
      primary: color.white,
      secondary: color.lightWhite,
    },
  },

  components: {
    button: lightThemeButton,
    input: lightThemeInput,
    card: {
      backgroundColorPrimary: color.white,
      backgroundColorSecondary: color.lightWhite,
    },
    alert: lightThemeAlert,
  },
};

export default lightTheme;
