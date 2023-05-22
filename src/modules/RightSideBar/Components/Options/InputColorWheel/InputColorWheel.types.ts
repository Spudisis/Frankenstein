export type WheelObject = {
  hex: string;
  hsl: {
    h: number;
    a: number;
    l: number;
    s: number;
  };
  oldHue: number;
  hsv: {
    h: number;
    a: number;
    l: number;
    s: number;
  };
  rgb: {
    a: number;
    r: number;
    g: number;
    b: number;
  };
  source: string;
};
