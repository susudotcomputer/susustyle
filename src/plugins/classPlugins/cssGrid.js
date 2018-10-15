export const gridCol = {
  name: 'gridCol',
  type: 'class',
  className: ['col'],
  modifiers: [
    {
      regex: '\\d+',
      separator: '-',
      modifierFn: size => ({ 'grid-column-end': `span ${size}` })
    },
    {
      regex: '\\d+',
      regexSeparator: '-',
      separator: '-',
      modifierFn: size => ({ 'grid-column-start': `${parseInt(size) + 1}` }),
      className: ['offset']
    }
  ]
};

export default [gridCol];
