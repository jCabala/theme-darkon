//pt
import PropTypes from 'prop-types';
//components
import Image from 'next/image';

const MyImage = ({
  src,
  alt,
  layout,
  width,
  height,
  objectFit,
  lazy,
  asImg,
}) => {
  if (asImg) return <img src={src} alt={alt} />;

  return (
    <Image
      src={src}
      alt={alt}
      layout={layout}
      width={width}
      height={height}
      objectFit={objectFit}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};

MyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  layout: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  objectFit: PropTypes.string,
  lazy: PropTypes.bool,
  asImg: PropTypes.bool,
};

export default MyImage;
