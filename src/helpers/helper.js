
// This can save some lines of code in the future when: editing and deleting;
export const findPost = (postId, posts) => {
  if (!postId || !posts ) {
    return;
  }
  return posts.find( (post) => (postId === post.id));
}

export const getChildrenComments = (parentId, comments) => comments.filter( (comment) => (parentId === comment.parent_id));

export const sortByLast = (posts) => {
  // TODO: SORT BY LAST
};
