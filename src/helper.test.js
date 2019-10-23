import { findPost } from './helpers/helper';

it('should return undefined if there is no postId', () => {
  expect(findPost()).toEqual(undefined);
});
