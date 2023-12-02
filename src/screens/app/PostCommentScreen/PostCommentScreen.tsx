import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;
  const {list, fetchNextPage, hasNextPage, isFetchingNextPage} =
    usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postComment={item}
        userId={1}
        postAuthorId={postAuthorId}
      />
    );
  }

  const itemSeparator = useCallback(() => <Box mb="s16" />, []);

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 16}}
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
