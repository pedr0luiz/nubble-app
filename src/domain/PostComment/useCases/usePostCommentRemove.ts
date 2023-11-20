import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(
  postCommentId: number,
  options?: MutationOptions<string>,
) {
  const {mutate, loading, error} = useMutation(
    () => postCommentService.remove(postCommentId),
    options,
  );

  async function removeComment() {
    await mutate(postCommentId);
  }

  return {
    removeComment,
    loading,
    error,
  };
}
