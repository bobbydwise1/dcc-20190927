/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Snapchat.

Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
*/

/* Notes:
For intervals labeled:

interval1:  [i1,j1]
interval2:  [i2,j2]

ensure all these cases (and their pair) are covered:

case1:  One interval can swallow the entire other interval
i1 <= i2 && j1 >= j2
result:  delete [i2,j2], because it is absorbed by the bigger interval [i1,j1]

case2:  One interval overlaps into the start of the next interval
i1 <= i2 && (j1 >= i2 && j1 <= j2)
result:  delete both, and a new interval, [i1,j2] is created

case3:  One interval overlaps into the end of the next interval
(i1 >= i2 && i1 <= j2) && j1 >= j2
result:  delete both, and a new interval, [i2,j1] is created

*/

const condense = (yourMatrix) => {
  let output = []
  for ( i = 0; i < yourMatrix.length; i++ ) {
    for ( j = i; j < yourMatrix.length; j++ ) {
      if ( yourMatrix[i] == yourMatrix[j] ) {
        continue;
      }
      //case 1
      if ((yourMatrix[i][0] <= yourMatrix[j][0]) && (yourMatrix[i][1] >= yourMatrix[j][1])) {
        output.push([yourMatrix[i][0],yourMatrix[i][1]])
      } else if ((yourMatrix[i][0] >= yourMatrix[j][0]) && (yourMatrix[i][1] <= yourMatrix[j][1])) {
        output.push([yourMatrix[j][0],yourMatrix[j][1]])
      } else if ((yourMatrix[i][0] <= yourMatrix[j][0]))
    }
  }
  return output
}

const interval1 = [1,3]
const interval2 = [5,8]
const interval3 = [4,10]
const interval4 = [20,25]
let test1 = [interval1, interval2, interval3, interval4]

$(document).ready(function() {
  $('#form-1').submit(function(){
    event.preventDefault()
    let input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')  //JSON.parse does not like single quotes for arrays
    input1 = JSON.parse(input1)
    event.preventDefault()
    $('#output-1').text(elimArr(input1))

  })
});
