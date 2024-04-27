import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  MemoizedPostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;
  const {list, fetchNextPage, hasNextPage, isFetchingNextPage} =
    usePostCommentList(postId);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<PostComment>) => {
      return (
        <MemoizedPostCommentItem
          postId={postId}
          postComment={item}
          userId={1}
          postAuthorId={postAuthorId}
        />
      );
    },
    [postAuthorId, postId],
  );

  const itemSeparator = useCallback(() => <Box mb="s16" />, []);

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 16}}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={
            <PostCommentBottom
              isLoading={isFetchingNextPage}
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          }
          ItemSeparatorComponent={itemSeparator}
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
