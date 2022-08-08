//hooks
import { useCallback } from 'react';
//components
import Particles from 'react-tsparticles';
//utils
import { loadFull } from 'tsparticles';
//config
import variants from './variantsSettings';
import CONFIG from '../../data/config';
//styles
import styles from '../../styles/modules/ParticlesBg.module.scss';

const ParticlesBg = () => {
  const particlesInit = useCallback(async main => {
    await loadFull(main);
  }, []);

  return (
    <div className={styles.particlesContainer}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={variants[CONFIG.backgroundAnimationVariant]}
      />
    </div>
  );
};

export default ParticlesBg;
