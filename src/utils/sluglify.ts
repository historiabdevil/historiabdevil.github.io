export const sluglify = (text: string) => text.replace(/\s+/g, '-');
export const unsluglify = (text: string) => text.replace(/-/g, ' ');
