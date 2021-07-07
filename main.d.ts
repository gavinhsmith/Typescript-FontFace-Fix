interface FontFaceDescriptors {
    ascentOverride?: "normal" | `${number}%`,
    descentOverride?: "normal" | `${number}%`,
    featureSettings?: string,
    lineGapOverride?: "normal" | `${number}%`,
    stretch?: "normal" | "semi-condensed" | "condensed" | "extra-condensed" | "ultra-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" |  `${number}%`,
    style?: "normal" | "italic" | `oblique${"" | ` ${number}%'` | ` ${number}% ${number}%`}`,
    unicodeRange?: `U+${string}`,
    variant?: string,
    variationSettings?: string,
    weight?: "normal" | "bold" | `${number}` | "normal normal" | "bold normal" | `${number} normal` | "normal bold" | "bold bold" | `${number} bold` | `normal ${number}` | `bold ${number}` | `${number} ${number}`;
}
export interface FontFace {
    new (family: string, source: string, descriptors?: FontFaceDescriptors): FontFace,
    load(): Promise<FontFace>
}
export interface FontFaceSet {
    readonly status: "loading" | "loaded",
    readonly ready: Promise<string>
    add(font: FontFace): void
    check(font: string, text: string): boolean
    load(font: string, text: string): Promise<FontFace[]>
}