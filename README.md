# js-animated-counter
This is a dynamic number counter in JS. Works with positive and negative numbers, going up or down.

This is a test version, so the parameters are withing a certain limit, but you can fork and try it out by implementing different parameter limits for each input field.

## First input field
Filling in the number you want to go to from the current number displayed at the bottom

## Second input field
Filling in how many of the ending loop numbers will be affected by the slowing down effect (last 20, last 10, etc.)

## Third input field
Filling in the slowing down increment in miliseconds.

### Example:
First input value: 100
Second input value: 20
Third input value: 15

If our current display number is 0 (default when page is loaded), we want to animate it to 100. It will without any delay count towards 80, then from then it will count each subsequent number with a delay of 15 additional miliseconds, so 81 will be displayed after 15 ms, 82 after 30, 90 after 150 and so on.
