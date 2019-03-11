import assert from 'assert';
import makeAwesomeSigmoid from '../src/index.js';

const CLOSETO_RANGE = 0.000001;
const closeTo = (val1, val2) => {
  if(Math.abs(val1 - val2) < CLOSETO_RANGE){
    assert.ok("both valuse is too close");
  }else{
    assert.equal(val1, val2);
  }
}

describe('test case 1', () => {
  it('test case 1', () => {
    const sigmoid = makeAwesomeSigmoid({
      center: 0,
      deviation: 1,
      deviation_output: 0.75,
    });

    closeTo(sigmoid(0), 0.5);
    closeTo(sigmoid(1), 0.75);
    closeTo(sigmoid(-1), 0.25);
    closeTo(sigmoid(Infinity), 1);
    closeTo(sigmoid(-Infinity), 0);
  });


  it('test case 2', () => {
    const sigmoid = makeAwesomeSigmoid({
      center: 50,
      deviation: 40,
      deviation_output: 0.9,
    });

    closeTo(sigmoid(50), 0.5);
    closeTo(sigmoid(90), 0.9);
    closeTo(sigmoid(10), 0.1);
    closeTo(sigmoid(Infinity), 1);
    closeTo(sigmoid(-Infinity), 0);
  });

  it('test case 3', () => {
    const sigmoid = makeAwesomeSigmoid({
      center: -50,
      deviation: -40,
      deviation_output: 0.1,
    });

    closeTo(sigmoid(-50), 0.5);
    closeTo(sigmoid(-10), 0.9);
    closeTo(sigmoid(-90), 0.1);
    closeTo(sigmoid(Infinity), 1);
    closeTo(sigmoid(-Infinity), 0);
  });
});

