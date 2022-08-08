//components
import ParticlesBg from '../components/BgParticles';
import Header from '../components/Header';
//styles
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ParticlesBg />
    </>
  );
}

export default MyApp;

