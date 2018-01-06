/**
 * turns px into em
 * @param pixels
 * @returns {string}
 */
const emCalc = pixels => {
    return `${(pixels / 14).toFixed(4)}em`;
};

export const MOBILE_SCREEN = `all and (max-width: ${emCalc(415)})`;
