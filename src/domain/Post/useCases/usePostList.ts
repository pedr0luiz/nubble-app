import {useEffect, useRef, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState<boolean>(false);
  const page = useRef<number>(1);
  const hasNextPage = useRef<boolean>(true);

  async function fetchInitialData() {
    setIsLoading(true);
    try {
      const {data, meta} = await postService.getList(page.current);
      setPostList(data);
      hasNextPage.current = meta.hasNextPage;
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchNextPage() {
    if (isLoading || isFetchingNextPage || !hasNextPage.current) {
      return;
    }
    setIsFetchingNextPage(true);
    try {
      const {data, meta} = await postService.getList(page.current + 1);
      page.current += 1;
      hasNextPage.current = meta.hasNextPage;
      setPostList([...postList, ...data]);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsFetchingNextPage(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    isLoading,
    isError,
    isFetchingNextPage,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
