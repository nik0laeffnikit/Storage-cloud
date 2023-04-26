const extColor = {
  pdf: "purple",
  xls: "green",
  doc: "blue",
  txt: "blue",
  png: "orange",
  PNG: "orange",
  jpg: "orange",
  JPG: "orange",
  jpeg: "orange",
  JPEG: "orange",
  zip: "red",
} as const;

export type Extension = keyof typeof extColor;
export type Color = typeof extColor[Extension];

export const getColorByExtension = (ext: string): Color => {
  return extColor[ext as Extension];
};