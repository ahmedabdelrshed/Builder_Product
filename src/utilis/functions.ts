// Function for Customizing Text
/**
 * Slices a given text to a specified maximum length and appends an ellipsis if the text exceeds that length.
 *
 * @param {string} text - The text to be sliced.
 * @param {number} [max=50] - The maximum length of the sliced text. Default is 50.
 * @returns {string} - The sliced text with an ellipsis appended if it exceeds the specified length.
 */
export function textSlicer(text: string, max: number = 50) {
    if (text.length >= max)
        return `${text.slice(0, max)} ...`;
    return text;
}