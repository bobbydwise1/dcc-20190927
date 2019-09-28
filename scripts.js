/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Snapchat.

Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
*/

/* Notes:
For intervals labeled:

interval1:  [i0,i1]
interval2:  [j0,j1]

ensure all these cases (and their pair) are covered:

case1:  One interval can swallow the entire other interval
i0 <= j0 && i1 >= j1
result:  delete [j0,j1], because it is absorbed by the bigger interval [i0,i1]
ex:
[i0,i1] = [10,40]
[j0,j1] = [15,30]
result:
[i0,i1] = [10,40]

case2:  One interval overlaps into the start of the next interval
i0 <= j0 && (i1 >= j1 && i1 <= j1)
result:  delete both, and a new interval, [i0,j1] is created
ex:
[i0,i1] = [10,40]
[j0,j1] = [30,60]
result:
[i0,j1] = [10,60]

case3:  One interval overlaps into the end of the next interval
(i0 >= j0 && i0 <= j1) && i1 >= j1
result:  delete both, and a new interval, [j0,i1] is created
ex:
[i0,i1] = [10,40]
[j0,j1] = [5,20]
result:
[j0,i1] = [5,40]

*/

const condense = (inter) => {
  let output = []
  let copied = JSON.parse(JSON.stringify(inter))
  for ( i = 0; i < inter.length; i++ ) {
    for ( j = i; j < inter.length; j++ ) {
      // if (( i == inter.length-1 ) && ( j == inter.length-1 )) {
      // }
      if ( inter[i] == inter[j] ) {
        continue;
      }
      console.log('input = ',inter[i],inter[j])
      if ((inter[i][0] <= inter[j][0]) && (inter[i][1] >= inter[j][1])) {
        output.push([inter[i][0],inter[i][1]])
        copied = copied.splice(j)
      } else if ((inter[i][0] >= inter[j][0]) && (inter[i][1] <= inter[j][1])) {
        output.push([inter[j][0],inter[j][1]])
        copied = copied.splice(j)
      } else if ((inter[i][0] <= inter[j][0]) && ((inter[i][1] >= inter[j][1])&&(inter[i][1] <= inter[j][1]))) {
        output.push([inter[i][0],inter[j][1]])
      } else if ((inter[i][0] >= inter[j][0]) && ((inter[i][1] <= inter[j][1])&&(inter[i][1] >= inter[j][1]))) {
        output.push([inter[j][0],inter[i][1]])
      } else if ((inter[i][0] >= inter[j][0]) && (inter[i][0] <= inter[j][1]) && (inter[i][1] >= inter[j][1])) {
        output.push([inter[j][0],inter[i][1]])
      } else if ((inter[i][0] <= inter[j][0]) && (inter[i][0] >= inter[j][1]) && (inter[i][1] <= inter[j][1])) {
        output.push([inter[i][0],inter[j][1]])
      } else {
      }
      console.log('output = ', output)
      console.log('copied = ', copied)
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
    $('#output-1').text(JSON.stringify(input1))

  })
});
