import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Teste new post</Text>
    </Screen>
  );
}
