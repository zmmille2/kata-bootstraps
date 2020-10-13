import { HelloWorld } from "./helloWorld";
import { RemoteLogger } from "./remoteLogger";

// 👇 Test example using a mock/spy with async/await
describe("Saying Hello World asynchronously", () => {
  it("should log something using the remote logger", async () => {
    // Arrange
    const message = "Hello World!";
    const stubLogger: RemoteLogger = {
      log: jest.fn(),
    };
    const sut = new HelloWorld(stubLogger);

    // Act
    await sut.say(message);

    // Assert
    expect(stubLogger.log).toHaveBeenCalledWith(message);
  });
});
