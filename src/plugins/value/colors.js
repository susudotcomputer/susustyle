import archiveColors from './_archive-colors';
import neonColors from './_neon-colors';

const hexToRgba = (hex, opacity) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

const colorPlugin = {
  name: 'colors',
  type: 'lookup',
  values: {
    black: '#000000',
    white: '#ffffff',
    ...archiveColors,
    ...neonColors,
    'snackalong-yellow': '#FFB129'
  },
  valueModifiers: [
    {
      name: 'opacity',
      separator: '_',
      indicator: '\\d+',
      modifierFn: hexToRgba
    },
    {
      name: 'important',
      indicator: '!',
      modifierFn: value => `${value} !important`
    }
  ]
};

export default colorPlugin;
