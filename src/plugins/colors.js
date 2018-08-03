const hexToRgba = (hex,opacity) => {
  hex = hex.replace('#','');
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);

  return `rgba(${r},${g},${b},${opacity/100})`;
};

const colorsPlugin = {
  name: 'colors',
  type: 'lookup',
  values: {
    'black': '#000000',
    'white': '#ffffff',
    'pink': '#ff0099',
    'ksr-green-800': '#098530',
    'ksr-green-700': '#05AF3C',
    'ksr-green-500': '#25CB68',
    'ksr-green-400': '#2BDE73',
    'blue-600': '#003BFF',
    'blue-500': '#2B60FF',
    'soft-black': '#282828',
    'grey-600': '#656868',
    'grey-500': '#9B9E9E',
    'grey-300': '#DCDEDD',
    'grey-200': '#E8E8E8',
    'grey-100': '#FBFBFA',
    'red-500': '#EF0707',
    'red-400': '#FF5151',
  },
  sampleValues: ['black','pink'],
  valueModifiers: [
    {
      name: 'opacity',
      separator: '_',
      indicator: '\\d+',
      modifierFn: hexToRgba,
      sampleIndicatorValues: ['20','30','7','1','99']
    }
  ]
};

export default colorsPlugin;
