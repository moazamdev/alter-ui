export const getTextColor = (backgroundColor = "#000000") => {
    // Convert background color to RGB values
    const rgb = parseInt(backgroundColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    // Calculate brightness using luminance formula
    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return dark or light text color based on brightness
    return brightness;
};