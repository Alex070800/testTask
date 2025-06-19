import { API } from "../configs/api";
import { saveFile } from "../utils/saveFile";
import { TypeFile } from "../view-models/type-files";

class FileService {
  async getFileById(id: string) {
    try {
      let res = API.getFile({ id });
      let result = await (await res).blob();
      console.log(result);
      saveFile(result, TypeFile[TypeFile.pdf]);
    } catch (err: any) {
      console.error(err);
    }
  }
}
export const fileService: FileService = new FileService();
