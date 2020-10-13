export abstract class RemoteLogger {
  public abstract log(message: string): Promise<void>;
}
