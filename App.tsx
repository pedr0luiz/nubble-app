import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App() {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{color: 'red'}}>
        Coffstack
      </Text>
      <Text preset="headingLarge" style={{fontFamily: 'Satoshi-Regular'}}>
        Coffstack
      </Text>
      <Text preset="paragraphMedium">Coffstack</Text>
    </SafeAreaView>
  );
}

export default App;
