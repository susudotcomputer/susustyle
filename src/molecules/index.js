const buttonMolecules = {
  'bttn': 'medium text-center lh1 pointer bg-white border-none relative inline-block webkit-appearance-none no-radius', // transitions are missing here
  'bttn-xsmall': 'h5 lh5 px2 fz12px',
  'bttn-small': 'h6 lh6 px2 fz12px',
  'bttn-medium': 'h7 lh7 px3 fz14px',
  'bttn-large': 'h8 lh8 px4 fz16px',
  'bttn-xlarge': 'h9 lh9 px4 fz16px',
};

const molecules = {
  expand: {
    'headline-500': 'type-14 type-16-sm type-21-lg'
  },
  merge: {
    // accessibility.scss
    'for-screenreader': 'absolute t-100px w1px h1px clip',
    // background.scss
    'no-background': 'bg-transparent bg-none',
    // buttons.scss
    ...buttonMolecules,
    // type-sizes.scss
    'type-132': 'fz132px lh22',
    'type-100': 'fz100px lh17',
    'type-80': 'fz80px lh14',
    'type-66': 'fz66px lh12',
    'type-60': 'fz60px lh11',
    'type-48': 'fz48px lh9',
    'type-38': 'fz38px lh7',
    'type-34': 'fz34px lh7',
    'type-28': 'fz28px lh6',
    'type-24': 'fz24px lh5',
    'type-21': 'fz21px lh5',
    'type-18': 'fz18px lh4',
    'type-16': 'fz16px lh4',
    'type-14': 'fz14px lh4',
    'type-13': 'fz13px lh3',
    'type-12': 'fz12px lh3',
    'type-10': 'fz10px lh2',

  }
};

export default molecules;