# binary search


## explain what a binary search is and gave an Example

A binary search is an algorithm to search through an array. this algorithm can be
more efficient than an linear search since it doesn't go through every element
in the array. A binary search pretty much divides and conquers. This only
works if the array is ordered from least to greatest or it won't work. Since
my array isn't ordered I used a basic algorithm to sort the array of items from least
to greatest. After that I found what the middle was and made sure to round it down since it
is more efficient that way. (the middle number is just the max amount of elements in the array + the min amount of elements in the array) / 2
for Example the starting middle would be (0 + 4) / 2 which is 2. After I found out what the middle number is in the array I compared it and saw if it
is bigger than the number we are looking for, if it is bigger than the number we are looking for set max to be equal
to the middle minus 1, so it ignore the right side of array. If the number is less than the number we are looking for we
set min to be equal to middle plus 1, so it ignores the left side of the array and we redefine what middle is with the new
values that we set. now we keep repeating until we get the number or it isn't found. Make sure to set the condition in the
while loop to be (max >= min) so if min is greater than max that means we went through the array and no value was found.

## technologies used

* _html_
* _javascript_
