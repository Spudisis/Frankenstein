export type Hex = string

export interface WheelObject {
  hex: Hex
  hsl: {
    h: number
    a: number
    l: number
    s: number
  }
  oldHue: number
  hsv: {
    h: number
    a: number
    l: number
    s: number
  }
  rgb: {
    a: number
    r: number
    g: number
    b: number
  }
  source: string
}
