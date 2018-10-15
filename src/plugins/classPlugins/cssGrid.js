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
      modifierFn: size => ({ 'grid-column-start': `(${size} + 1)` }),
      className: ['offset']
    }
  ]
};

export default [gridCol];

// .col-span-#{$i} { grid-column-end: span $i }
// .col-offset-#{$i} { grid-column-start: ($i + 1) }
