import CONFIG from '../data/config';

export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

export const getPageByName = name =>
  CONFIG?.pages.filter(page => page.name === name)[0];

export const handleDragOrClickTools = callback => {
  const mouseDownCoords = e => {
    window.checkForDrag = e.clientX;
  };

  const clickOrDrag = e => {
    const mouseUp = e.clientX;
    if (
      mouseUp < window.checkForDrag + 6 &&
      mouseUp > window.checkForDrag - 6
    ) {
      callback();
    }
  };

  return [mouseDownCoords, clickOrDrag];
};

