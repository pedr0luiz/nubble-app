import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Teste settings</Text>
    </Screen>
  );
}
