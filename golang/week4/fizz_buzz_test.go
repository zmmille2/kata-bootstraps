package fizzbuzz

import (
	"github.com/stretchr/testify/assert"
	"testing"
	"fmt"
)

func TestHello(t *testing.T) {
	name := "Wallaby"

	expected := "Hello " + name
	actual := Greet(name)

	assert.Equal(t, expected, actual, fmt.Sprintf("Input: %v", name))
}
