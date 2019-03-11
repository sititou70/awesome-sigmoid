# awesome-sigmoid
generate perfect sigmoid function for you

![awesome sigmoid](/docs/awesome_sigmoid.png?raw=true)

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

