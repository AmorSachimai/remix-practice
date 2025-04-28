export const toBlob = (dataURI: string): Blob => {
  const data = dataURI.split(",")[1];
  if (!data) {
    throw new Error("不正なURIが指定されました");
  }
  const byteString = atob(data);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const mimeString = dataURI?.split(",")[0]?.split(":")[1]?.split(";")[0];
  return new Blob([ab], { type: mimeString });
};
