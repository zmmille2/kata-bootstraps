package fizzbuzz


import (
	"errors"
	"strings"
)

func Greet(name string) string {
	return "Goodbye " + name
}

func FizzBuzz(num int) (string, error) {
	var result = ""

	if num < 0 {
		return result, errors.New("Input should be >= 0")
	}

	if num%3 == 0 {
		result = strings.Join([]string{result, "Fizz"}, "")
	}

	if num%5 == 0 {
		result = strings.Join([]string{result, "Buzz"}, "")
	}

	return result, nil
}