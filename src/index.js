export const sigmoid = (x, gain) => (Math.tanh((gain * x) / 2) + 1) / 2;

export default ({center, deviation, deviation_output}) => {
  /*
    see: https://www.wolframalpha.com/input/?i=solve+y+%3D+sigmoid((g)x)+for+g
    variables: x: sigmoid input, y: sigmoid output, g: gain
  */
  const gain = Math.log(-1 * deviation_output / (deviation_output - 1)) / deviation;
  return x => sigmoid(x - center, gain);
};

