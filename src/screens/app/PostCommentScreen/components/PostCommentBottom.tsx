import React from 'react';
import {Pressable} from 'react-native';

import {ActivityIndicator, Box, Text} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading?: boolean;
}
export function PostCommentBottom({
  fetchNextPage,
  hasNextPage,
  isLoading,
}: Props) {
  if (isLoading) {
    return (
      <Box mt="s16">
        <ActivityIndicator color="backgroundContrast" />
      </Box>
    );
  }
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text bold color="primary" textAlign="center" mt="s16">
          Ver mais
        </Text>
      </Pressable>
    );
  }

  return null;
}
