export const getBase64 = (
  file: Blob,
  successFunc: (result: string) => void
) => {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    let r = reader.result?.slice(23);
    successFunc(r as string);
  };
  reader.onerror = function (error) {
    return "";
  };
  return "";
};
