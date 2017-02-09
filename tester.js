import Tester from './lib/Tester'

/*
Use the tester to assure this game owrkds as expected.
Modify seed, expectedState and numOfIterations to match your test case,
save tis file, then run from the command line with: `npm run tester`
*/

let prettyPrint = (matrix) => {
  let out = "\n";
  for(var i=0; i < matrix.length; i++){
    out += matrix[i].join(" ") + "\n";
  }
  out += "\n";
  console.log(out);
}

let seed = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0]
];

let expectedState = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

let numOfIterations = 1;

let tester = new Tester(seed, numOfIterations, expectedState);

console.log('Testing that seed: ');
prettyPrint(seed);
console.log('morphs into expectedState: ');
prettyPrint(expectedState);
console.log('after ' + numOfIterations + ' iterations');
console.log('-----------------------');

if(tester.execute()) {
  console.log('The test passed!');
} else {
  console.log('The test failed!');
}
