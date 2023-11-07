import { accents } from "./../Context/AccentColorContext";

export const getHoverClassName = (accentColor: string): string => {
  if (accentColor === accents.RED) return `hover:text-[#E01A4F]`;
  if (accentColor === accents.BLUE) return `hover:text-[#4070F4]`;
  return `hover:text-[#5FB49C]`;
};
export function hexToRgb(hex: string): string {
  // Remove the # character if present
  hex = hex.replace(/^#/, "");

  // Check for valid hex color code
  if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
    return "";
  }
  console.log(hex);

  // Parse the hex value to RGB
  let num = parseInt(hex, 16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  return `${r}, ${g}, ${b}`;
}
