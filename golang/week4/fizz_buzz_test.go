package fizzbuzz

import (
	"github.com/stretchr/testify/assert"
	"testing"
	"fmt"
)

func TestGreet(t *testing.T) {
	name := "Wallaby"

	expected := "Hello " + name
	actual := Greet(name)

	assert.Equal(t, expected, actual, fmt.Sprintf("Input: %v", name))
}

func TestFizzSingle(t *testing.T) {
	v, e := FizzBuzz(3)
	assert.Equal(t, "Fizz", v, "Multiples of 3 only should be Fizz")
	assert.Equal(t, nil, e, "Error should be nil")
}

func TestBuzzSingle(t *testing.T) {
	v, e := FizzBuzz(5)
	assert.Equal(t, "Buzz", v, "Multiples of 3 only should be Buzz")
	assert.Equal(t, nil, e, "Error should be nil")
}

func TestFizzBuzzSingle(t *testing.T) {
	v, e := FizzBuzz(15)
	assert.Equal(t, "FizzBuzz", v, "Multiples of 3 and 5 should be FizzBuzz")
	assert.Equal(t, nil, e, "Error should be nil")
}

func TestErrorSingle(t *testing.T) {
	v, e := FizzBuzz(-1)
	assert.Equal(t, "", v, "Invalid number should give an empty string")
	assert.NotEqual(t, nil, e, "Error should not be nil")
}

func TestFizzMultiple(t *testing.T) {
	multiplesOfThree := []int {3, 6, 9, 12, 18, 21, 24}

	for _, multiple := range multiplesOfThree {
		v, e := FizzBuzz(multiple)
		assert.Equal(t, "Fizz", v, fmt.Sprintf("Input: %v", multiple))
		assert.Nil(t, e, "Error should be nil")
	}
}

func TestBuzzMultiple(t *testing.T) {
	multiplesOfFive := []int {5, 10, 20, 25, 35, 40, 50}

	for _, multiple := range multiplesOfFive {
		v, e := FizzBuzz(multiple)
		assert.Equal(t, "Buzz", v, fmt.Sprintf("Input: %v", multiple))
		assert.Nil(t, e, "Error should be nil")
	}
}

func TestFizzBuzzMultiple(t *testing.T) {
	multiplesOfThreeAndFive := []int {15, 30, 45, 60, 75, 90}

	for _, multiple := range multiplesOfThreeAndFive {
		v, e := FizzBuzz(multiple)
		assert.Equal(t, "FizzBuzz", v, fmt.Sprintf("Input: %v", multiple))
		assert.Nil(t, e, "Error should be nil")
	}
}

func TestEmptyMultiple(t *testing.T) {
	nonMultiples := []int {2, 4, 7, 8, 11, 13}

	for _, nonMultiple := range nonMultiples {
		v, e := FizzBuzz(nonMultiple)
		assert.Equal(t, "", v, fmt.Sprintf("Input: %v", nonMultiple))
		assert.Nil(t, e, "Error should be nil")
	}
}

func TestErrorMultiple(t *testing.T) {
	invalidNumbers := []int {-1, -2, -3, -4, -5, -6}

	for _, multiple := range invalidNumbers {
		v, e := FizzBuzz(multiple)
		assert.Equal(t, "", v, fmt.Sprintf("Input: %v", multiple))
		assert.NotNil(t, e, "Error should not be nil")
	}
}
