import { Storage } from "../../interfaces/storage";
import { AzureBlobStorageService } from "./azureBlobStorageService";

jest.mock("@azure/storage-blob");
import { BlockBlobClient } from "@azure/storage-blob";

describe("Azure Blob Storage Service", () => {
  let storage: Storage;
  const mockBlobContent = "my blob content";

  beforeEach(() => {
    // TODO - mock out downloadToBuffer and uploadData functions of BlockBlobClient

    storage = new AzureBlobStorageService("mystorageaccount");
  });

  it("reads from Azure Blob Storage", async () => {
    const content = await storage.read("container/blob.txt");
    // TODO - assert downloadToBuffer was called
    // TODO - assert content is same as mockBlobContent
  });

  it("writes to Azure Blob Storage", async () => {
    const myBlobContent = "hello";
    await storage.write("container/blob.txt", myBlobContent);
    // TODO - assert uploadData is called with myBlobContent
  });
});
