import homeConfig from './homeConfig';
import aboutConfig from './aboutConfig';
import contactConfig from './contactConfig';

const CONFIG = {
  backgroundAnimationVariant: 'shiningStars', //one of: confetti, shinngStars or steadyStars
  modalInitAnimationVariant: 'dropIn', //one of: dropIn, rotate or flip
  pages: [
    {
      name: 'Home',
      config: homeConfig,
    },
    {
      name: 'About',
      config: aboutConfig,
    },
    {
      name: 'Projects',
    },
    {
      name: 'Contact',
      config: contactConfig,
    },
  ],
};

export default CONFIG;
