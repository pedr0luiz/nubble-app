import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box} from '../../Box/Box';
import {ProfileAvatar} from '../../ProfileAvatar/ProfileAvatar';
import {Text} from '../../Text/Text';

type Props = Pick<Post, 'author'>;
export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
