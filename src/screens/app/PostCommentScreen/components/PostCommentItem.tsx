import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postId: number;
  postComment: PostComment;
  userId: number | null;
  postAuthorId: number;
}
export function PostCommentItem({
  postId,
  postComment,
  userId,
  postAuthorId,
}: Props) {
  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => console.log({postId, userId, postAuthorId}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable testID="post-comment-id" onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
