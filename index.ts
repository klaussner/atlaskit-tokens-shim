import { colors } from "@atlaskit/theme";
import { token as atlaskitToken } from "@atlaskit/tokens";
export * from "@atlaskit/tokens";

type Tokens = Parameters<typeof atlaskitToken>[0];

const fallbacks: Partial<Record<Tokens, string>> = {
  "color.background.input.hovered": colors.N10,
  "color.background.neutral": colors.N20,
  "color.border": colors.N40,
  "color.icon.success": colors.G300,
  "color.icon.subtle": colors.N400,
  "color.text.danger": colors.R400,
  "color.text.subtle": colors.N500,
  "color.text.subtlest": colors.N400,
  "elevation.surface": colors.N0,
  "elevation.shadow.overlay":
    "0px 8px 12px rgba(9, 30, 66, 0.15),0px 0px 1px rgba(9, 30, 66, 0.31)",
  "elevation.shadow.raised":
    "0px 1px 1px rgba(9, 30, 66, 0.25),0px 0px 1px rgba(9, 30, 66, 0.31)",
  "elevation.surface.overlay": colors.N0,
  "elevation.surface.raised": colors.N0
};

export const token: typeof atlaskitToken = (path) => {
  return atlaskitToken(path, fallbacks[path]);
};
