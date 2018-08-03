const addPseudos = (pseudos) => (cxs) => pseudos
  .reduce((accum, pseudo) => accum.concat(
    cxs.map(cx => `${pseudo}-${cx}`)
  ),[]);

const potentialButtonMolecules = {
  'bttn': {
    root: [
      'medium',
      'text-center',
      'lh1',
      'pointer',
      'bg-white',
      'border-none',
      'inline-block',
      'webkit-appearance-none',
      'no-radius',
      ...addPseudos(['hover','active'])(['color','shadow-2'])
    ],
    svg: ['fill-currentColor'],
  },
  'bttn-xsmall': {
    root: ['h5','px2','fz12px'],
    svg: ['h10px','w10px']
  },
  'bttn-small': {
    root: ['h6','px2','fz12px'],
    svg: ['h10px','w10px']
  },
  'bttn-medium': {
    root: ['h7','px3','fz14px'],
    svg: ['h18px','w18px','mr3px']
  },
  'bttn-large': {
    root: ['h8','px4','fz16px'],
    svg: ['h22px','w22px','mr3px']
  },
  'bttn-xlarge': {
    root: ['h9','px4','fz16px'],
    svg: ['h22px','w22px','mr3px']
  },
};
