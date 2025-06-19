import { formatFullDate } from "./date";

export function saveFile(blobFile: Blob, typeFile: string) {
  var blobUrl = URL.createObjectURL(blobFile);
  var link = document.createElement("a");
  link.href = blobUrl;
  link.download =
    "Результаты тестирования от " + formatFullDate(new Date()) + "." + typeFile;
  link.click();
}
