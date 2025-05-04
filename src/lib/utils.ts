import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sanitizeAIText = (input: string) => {
  // Replace Markdown-style code with inline <code> tags
  let output = input
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
    .replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italics

  // Replace newlines and bullets with HTML formatting
  output = output
    .replace(/\*\s+/g, "<li>")
    .replace(/\n{2,}/g, "</li><br><br>")
    .replace(/\n/g, "</li><li>");

  // Wrap with <ul> if it looks like a list
  if (output.includes("<li>")) {
    output = "<ul>" + output + "</ul>";
    // Ensure no hanging </li> tags
    output = output
      .replace(/<ul><li>/, "<ul><li>")
      .replace(/<\/li><br><br>/g, "</li>");
  }

  return output;
};
