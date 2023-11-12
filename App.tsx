import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';
import {TextInput} from './src/components/TextInput/TextInput';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <TextInput label="batata" />
          <Icon name="eyeOn" />
          <Button preset="outline" title="Loading" loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
