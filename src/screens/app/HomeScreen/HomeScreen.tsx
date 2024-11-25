import React, {useCallback, useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {ActivityIndicator, Box, PostItem, Screen} from '@components';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export function HomeScreen() {
  const {
    list: postList,
    isError,
    isLoading,
    isFetchingNextPage,
    refresh,
    fetchNextPage,
  } = usePostList();

  const flatListRef = useRef<FlatList<Post>>(null);

  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  const ItemSeparator = useCallback(() => {
    return <Box mb="s24" />;
  }, []);

  return (
    <Screen style={$screen}>
      <HomeHeader />
      <FlatList
        ref={flatListRef}
        data={postList}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={
          <HomeEmpty error={isError} loading={isLoading} refetch={refresh} />
        }
        contentContainerStyle={{flex: postList.length === 0 ? 1 : 0}}
        ListFooterComponent={
          <Box mb="s24" mt={isFetchingNextPage ? 's20' : undefined}>
            {isFetchingNextPage && (
              <ActivityIndicator color="backgroundContrast" />
            )}
          </Box>
        }
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        refreshing={isLoading}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
