export class ColorService {

    contrast(color: string | object, hex: boolean) {
        const rgb = hex ? this.hextorgb(color) : color as any;

        const dark = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) <= 186;

        return dark ? "#FFFFFF" : "#000000";
    }

    rgbtohex(rgb: string) {

    }

    hextorgb(hex: string | object) {
        if (typeof hex !== "string") {
            return;
        }

        return {
            r: parseInt(hex.slice(0, 2), 16),
            g: parseInt(hex.slice(2, 4), 16),
            b: parseInt(hex.slice(4, 6), 16),
        }
    }
}