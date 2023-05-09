import React from 'react';
import {Appbar} from 'react-native-paper';

const AppBar = props => {
  const {navigation, previous, options, route, back} = props;
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
};

export default AppBar;
