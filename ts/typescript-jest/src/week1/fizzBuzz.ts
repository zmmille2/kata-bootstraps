export class FizzBuzzService {
  public static execute(n: number): string {
    let result = "";
    if (n % 3 == 0) {
      result += "Fizz";
    }
    if (n % 5 == 0) {
      result += "Buzz";
    }
    if (result == "" || n == 0) {
      return n.toString();
    }
    return result;
  }
}
