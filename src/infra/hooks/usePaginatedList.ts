import {useEffect, useRef, useState} from 'react';

import {Page} from '@types';

export function usePaginatedList<TData>(
  getList: (page: number) => Promise<Page<TData>>,
) {
  const [listData, setListData] = useState<TData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState<boolean>(false);
  const page = useRef<number>(1);
  const hasNextPage = useRef<boolean>(true);

  async function fetchInitialData() {
    setIsLoading(true);
    try {
      const {data, meta} = await getList(1);
      setListData(data);
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
      const {data, meta} = await getList(page.current + 1);
      page.current += 1;
      hasNextPage.current = meta.hasNextPage;
      setListData([...listData, ...data]);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsFetchingNextPage(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: listData,
    isLoading,
    isError,
    isFetchingNextPage,
    refresh: fetchInitialData,
    fetchNextPage,
    hasNextPage: hasNextPage.current,
  };
}
