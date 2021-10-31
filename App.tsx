import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {API_URL} from '@env';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{API_URL}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
