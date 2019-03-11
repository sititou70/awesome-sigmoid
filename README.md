# awesome-sigmoid
[![npm version](https://badge.fury.io/js/awesome-sigmoid.svg)](https://badge.fury.io/js/awesome-sigmoid)
[![Build Status](https://travis-ci.org/sititou70/awesome-sigmoid.svg?branch=master)](https://travis-ci.org/sititou70/awesome-sigmoid)

![awesome sigmoid](https://raw.githubusercontent.com/sititou70/awesome-sigmoid/master/docs/awesome_sigmoid.png)

## install
`npm i awesome-sigmoid --save`

## example
```
import makeAwesomeSigmoid from 'awesome-sigmoid';

const mySigmoid = makeAwesomeSigmoid({
  center: 50,
  deviation: 40,
  deviation_output: 0.9,
});

console.log(mySigmoid(50)); //0.5
console.log(mySigmoid(90)); //0.9
console.log(mySigmoid(10)); //0.1
console.log(mySigmoid(Infinity)); //1
console.log(mySigmoid(-Infinity)); //0
```

## License
`awesome-sigmoid` is MIT licensed.

