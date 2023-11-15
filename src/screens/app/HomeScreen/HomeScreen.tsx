import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, postService} from '@domain';

import {Box, PostItem, Screen} from '@components';

export function HomeScreen() {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(res => {
      setPostList(res);
    });
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  const ItemSeparator = useCallback(() => {
    return <Box mb="s24" />;
  }, []);

  return (
    <Screen style={$screen} hideHeader>
      <FlatList
        data={postList}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
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
