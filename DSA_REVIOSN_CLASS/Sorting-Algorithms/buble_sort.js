`// gretter element goes to end of array
// largest elemet goes to end of the array in every iteration
//each step 1 gretter element goes to end
// bubble sort is example of stable sort means order donot change;
`;
let a = [10, 78, 45, 1, 0, -1];
a = [12, 18, 17, 6, 46];
a = [12, 14, 17, 6, 46];

// a=['e', 'p', 'f',   'g',  'h', 'x', 'i',  'j'];

function bubleSort(a) {
  let n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] % 6 > a[j + 1] % 6) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}
console.log("bubble_sort : ", bubleSort(a));
