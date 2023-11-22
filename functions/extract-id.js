import { last } from 'lodash';

const extractIdFromSlug = (slug) => {
  try {
    return last(slug.split('-'));
  } catch {
    return slug;
  }
};

export default extractIdFromSlug;
