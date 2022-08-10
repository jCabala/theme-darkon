//pt
import PropTypes from 'prop-types';
import Image from '../Image';
//styles
import styles from '../../styles/modules/Projects.module.scss';
//utils
import marked from 'marked';

const ProjectContent = ({ project }) => {
  return (
    <article className={styles.projectContentContainer}>
      <h1>{project?.frontmatter?.title}</h1>
      <p>{project?.frontmatter?.excerpt}</p>
      <div className={styles.mainProjectModalImage}>
        <Image
          src={project?.frontmatter?.cover_image}
          layout='fill'
          alt=''
          objectFit='cover'
        />
      </div>
      <div className={styles.projectBody}>
        <div
          dangerouslySetInnerHTML={{ __html: marked(project?.content) }}
        ></div>
      </div>
    </article>
  );
};

ProjectContent.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectContent;
