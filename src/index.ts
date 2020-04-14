export const sigmoid = (x: number, gain: number): number =>
  (Math.tanh((gain * x) / 2) + 1) / 2;

export const makeSigmoid = ({
  center,
  deviation,
  deviation_output,
}: {
  center: number;
  deviation: number;
  deviation_output: number;
}): ((x: number) => number) => {
  /*
    see: https://www.wolframalpha.com/input/?i=solve+y+%3D+sigmoid((g)x)+for+g
    variables: x: sigmoid input, y: sigmoid output, g: gain
  */
  const gain =
    Math.log((-1 * deviation_output) / (deviation_output - 1)) / deviation;
  return (x: number): number => sigmoid(x - center, gain);
};

export default makeSigmoid;
