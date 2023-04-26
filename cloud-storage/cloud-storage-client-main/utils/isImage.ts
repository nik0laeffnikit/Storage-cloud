export const isImage = (ext: string): boolean => {
    return ["jpg", "jpeg", "png", "gif", "JPG", "JPEG", "PNG", "GIF"].includes(ext);
  };