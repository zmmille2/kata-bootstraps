import { RemoteLogger } from "./remoteLogger";

export class HelloWorld {
  public dependency: RemoteLogger;

  constructor(dependency: RemoteLogger) {
    this.dependency = dependency;
  }

  public async say(message: string): Promise<void> {
    return this.dependency.log(message);
  }
}
