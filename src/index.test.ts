import makeSigmoid from '.';

const CLOSETO_RANGE = 0.000001;
const closeTo = (val1: number, val2: number): void => {
  if (Math.abs(val1 - val2) < CLOSETO_RANGE) {
    // both valuse is too close
  } else {
    expect(val1).toEqual(val2);
  }
};

describe('test case 1', () => {
  test('test case 1', () => {
    const sigmoid = makeSigmoid({
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

  test('test case 2', () => {
    const sigmoid = makeSigmoid({
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

  test('test case 3', () => {
    const sigmoid = makeSigmoid({
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
