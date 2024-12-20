import React, {memo} from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, useIsPostCommentAllowedToDelete} from '@domain';
import {usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postId: number;
  postComment: PostComment;
  userId: number | null;
  postAuthorId: number;
}

function PostCommentItem({postComment, userId, postAuthorId, postId}: Props) {
  const {showToast} = useToastService();

  const {mutate: removeComment} = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({message: 'Cometário deletado'});
    },
  });

  const isAllowToDelete = useIsPostCommentAllowedToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => removeComment({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable
      disabled={!isAllowToDelete}
      testID="post-comment-id"
      onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="paragraph">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}

export const MemoizedPostCommentItem = memo(PostCommentItem);
