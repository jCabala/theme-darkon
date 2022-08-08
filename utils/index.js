import CONFIG from '../data/config';

export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

export const getPageByName = name =>
  CONFIG?.pages.filter(page => page.name === name)[0];

