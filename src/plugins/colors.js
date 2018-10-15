const hexToRgba = (hex,opacity) => {
  hex = hex.replace('#','');
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);

  return `rgba(${r},${g},${b},${opacity/100})`;
};

const colorPlugin = {
  name: 'colors',
  type: 'lookup',
  values: {
    'black': '#000000',
    'white': '#ffffff',

    // Neon Colors
    'neon-crimson': '#DC143C',
    'neon-gold': '#FFD700',
    'neon-darkorange': '#FF8C00',
    'neon-chartreuse': '#7FFF00',
    'neon-green': '#008000',
    'neon-dodgerblue': '#1E90FF',
    'neon-white': '#FFFFFF',
    'neon-saddlebrown': '#8B4513',
    'neon-blanchedalmond': '#FFEBCD',
    'neon-pink': '#FFC0CB',

    // Project Colors
    'snackalong-yellow': '#FFB129',
    // Archive Colors
    'archive-brown-900': '#252119',
    'archive-brown-400': '#83704b',
    'archive-beige': '#EEE6D2'
  },
  valueModifiers: [
    {
      name: 'opacity',
      separator: '_',
      indicator: '\\d+',
      modifierFn: hexToRgba,
    }
  ]
};

export default colorPlugin;











