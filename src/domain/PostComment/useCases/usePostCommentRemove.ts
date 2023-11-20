import {useState} from 'react';

import {postCommentService} from '../postCommentService';

interface Options {
  onSuccess?: () => void;
}

export function usePostCommentRemove(postCommentId: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function removeComment() {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.remove(postCommentId);
      if (options?.onSuccess) {
        options.onSuccess();
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    removeComment,
    loading,
    error,
  };
}
