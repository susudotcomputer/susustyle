// Plugin config

const lineHeightPlugin = {
  name: 'lineHeight',
  type: 'pattern',
  valueRegexString: '[0-9]{1,2}(?:_[0-9]{1,2})?',
  valueModifiers: [
    {
      name: 'unitlees',
      default: true,
      indicator: '',
      modifierFn: x => `${x.split('_').join('.')}`,
      sampleValues: ['3', '5', '10', '0']
    },
    {
      name: 'pixel',
      indicator: 'px',
      modifierFn: x => `${x / 16}rem`,
      sampleValues: ['1', '2', '3', '-2', '-5']
    }
  ]
};

export default lineHeightPlugin;
