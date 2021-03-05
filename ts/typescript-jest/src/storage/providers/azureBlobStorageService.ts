import { AnonymousCredential, BlockBlobClient } from "@azure/storage-blob";
import { Storage } from "../../interfaces/storage";

/**
 * Storage implementation using Azure Blob Storage
 */
export class AzureBlobStorageService implements Storage {
  private storageAccountName: string;
  private credential: AnonymousCredential;

  constructor(storageAccountName: string) {
    this.storageAccountName = storageAccountName;
    this.credential = new AnonymousCredential();
  }

  /**
   * Reads the contents of a blob from the storage account
   *
   * @param {string} path Path to blob. Expected format {containerName}/{blobPath}
   * @returns {Promise<string>} Content of blob
   */
  public async read(path: string): Promise<string> {
    const blobClient = await this.getBlockBlobClient(path);
    const blobContent = await blobClient.downloadToBuffer();
    return blobContent.toString();
  }

  /**
   * Writes the contents of a blob in the storage account
   *
   * @param {string} path Path to target blob. Expected format {containerName}/{blobPath}
   * @param {string} content Blob content
   */
  public async write(path: string, content: string): Promise<void> {
    const blobClient = await this.getBlockBlobClient(path);
    await blobClient.uploadData(content);
  }

  private getBlockBlobClient(path: string): BlockBlobClient {
    const indexOfFirstSlash = path.indexOf("/");
    if (indexOfFirstSlash < 0) {
      throw new Error("Invalid format");
    }

    const containerName = path.substring(0, indexOfFirstSlash);
    const blobPath = path.substr(indexOfFirstSlash + 1);

    return new BlockBlobClient(
      `https://${this.storageAccountName}.blob.core.windows.net/${containerName}/${blobPath}`,
      this.credential
    );
  }
}
