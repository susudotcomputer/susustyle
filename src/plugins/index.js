import breakpoints from './breakpoints';
import colors from './value/colors';
import floats from './floats';
import hoverTarget from './hoverTarget';
import integers from './integers';
import lengthUnits from './lengthUnits';
import lineHeight from './lineHeight';
import pseudos from './pseudos';
import times from './times';
import cssGrid from './classPlugins/cssGrid';
import aspectRatio from './classPlugins/aspectRatio';
import applyToChildren from './applyToChildren';

export default [
  breakpoints,
  colors,
  floats,
  hoverTarget,
  integers,
  lengthUnits,
  lineHeight,
  pseudos,
  times,
  applyToChildren,
  ...cssGrid,
  aspectRatio
];
