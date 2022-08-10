//pt
import { PropTypes } from 'prop-types';
//node
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
//hooks
import { useState } from 'react';
//utils
import { getPageByName, sortByDate } from '../utils';
//components
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from './../components/About/index';
import Projects from '../components/Projects';
import Contact from './../components/Contact/Contact';
import Modal from './../components/Modal/Modal';
import { AnimatePresence } from 'framer-motion';
//styles
import styles from '../styles/modules/HomePage.module.scss';
//config
import CONFIG from '../data/config';

function HomePage({ projects }) {
  const [currentPageName, setCurrentPageName] = useState('Home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSetPage = page => {
    setCurrentPageName(page.name);
  };

  const getPage = () => {
    //get page component by page name and pass appropriate config to it
    const config = getPageByName(currentPageName)?.config;
    let returnPage;

    switch (currentPageName) {
      case 'Home':
        returnPage = <Home config={config} />;
        break;
      case 'About':
        returnPage = <About config={config} />;
        break;
      case 'Projects':
        returnPage = (
          <Projects
            config={config}
            modalOpen={handleOpenModal}
            projects={projects}
            handleModalContent={setModalContent}
          />
        );
        break;
      case 'Contact':
        returnPage = <Contact config={config} />;
        break;
      default:
        returnPage = null;
        break;
    }

    return returnPage;
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <main>{getPage()}</main>
        <Navigation
          pages={CONFIG.pages}
          handleSetPage={handleSetPage}
          currentPageName={currentPageName}
        />
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal handleClose={handleCloseModal} content={modalContent} />
        )}
      </AnimatePresence>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the projects dir
  const files = fs.readdirSync(path.join('data', 'projects'));

  // Get slug and frontmatter from projects
  const myProjects = files.map(filename => {
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('data', 'projects', filename),
      'utf-8'
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      frontmatter,
      content,
    };
  });

  return {
    props: {
      projects: myProjects.sort(sortByDate),
    },
  };
}

HomePage.propTypes = {
  projects: PropTypes.object,
};

export default HomePage;

