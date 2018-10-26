import breakpoints from './breakpoints';
import colors from './colors';
import floats from './floats';
import hoverTarget from './hoverTarget';
import integers from './integers';
import lengthUnits from './lengthUnits';
import pseudos from './pseudos';
import times from './times';
import cssGrid from './classPlugins/cssGrid';
import aspectRatio from './classPlugins/aspectRatio';

export default [
  breakpoints,
  colors,
  floats,
  hoverTarget,
  integers,
  lengthUnits,
  pseudos,
  times,
  ...cssGrid,
  aspectRatio
];
