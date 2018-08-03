const spanValue = (span,parent) => `calc(${(span/parent)*100}%)`

const coreColumns = (arr) => {
  const [span,parent] = arr;
  return { width: spanValue(span,parent) }
}

const offsetColumns = (arr) => {
  const [span,parent] = arr;
  return { 'margin-left': spanValue(span,parent)}
}

const colFeature = {
  featureName: 'columns',
  baseName: 'col',
  separator: '-',
  common: {
    root: ['v-align-top','left','relative','px1','px2-sm','px3-lg'],
  },
  plugins: [
    {
      default: true,
      name: 'core',
      indicator: '/(d+)-(d+)/',
      pluginFn: coreColumns
    },
    {
      name: 'offset',
      indicator: '/(d+)-(d+)/'
    }
  ]
}


const molecules = {
  'grid-container': [
    'max-w1336px',
    'mx-auto',
    'border-box',
    'px2',
    'px4-sm',
    'px6-lg'
  ],
  'col-center': ['mx-auto','float-none'],
  'nested-full-width': []
};
