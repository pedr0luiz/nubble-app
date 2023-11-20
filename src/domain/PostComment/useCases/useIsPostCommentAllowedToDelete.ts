import {PostComment} from '../postCommentTypes';

/**
 * @description user can delete the comment if it is the post author or comment author
 *
 * @param postComment comment to be deleted
 * @param userId the current session user id
 * @param postAuthorId the id of the post author
 */
export function useIsPostCommentAllowedToDelete(
  postComment: PostComment | null,
  userId: number | null,
  postAuthorId: number,
) {
  console.log(postComment?.author.id);
  if (!postComment) {
    return false;
  }

  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
}
