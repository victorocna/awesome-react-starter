import { last } from 'lodash';

const extractIdFromSlug = (slug: string): string | undefined => {
  try {
    return last(slug.split('-'));
  } catch {
    return slug;
  }
};

export default extractIdFromSlug;
