import React from 'react';

import {Button, Screen, Text} from '@components';

export function HomeScreen() {
  return (
    <Screen backgroundColor="carrotSecondary" flex={1}>
      <Text preset="headingLarge">Teste</Text>
      <Button title="Settings" />
    </Screen>
  );
}
