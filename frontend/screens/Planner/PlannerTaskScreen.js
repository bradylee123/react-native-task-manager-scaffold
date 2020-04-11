import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
  } from 'react-native';
import { Button } from 'react-native-elements';
import Session from '../../models/session';

const PlannerTaskScreen = props => {

  const task = props.navigation.getParam('task');

  const startSession = () => {
    const session = new Session("s29587321094", 1800, 0, false);
    task.sessions.push(session);
    props.navigation.navigate({
      routeName: 'WorkSession',
      params: {
        session: session
      }
    });
  }

  return (
    <React.Fragment>
      <TextInput>{task.title}</TextInput>
      <View style={styles.button}>
        <Button
          title="Start Working!"
          onPress={() => {
            startSession();
          }}
        />
      </View>
    </React.Fragment>
  );
};

PlannerTaskScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Tasks'
  };
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});

export default PlannerTaskScreen;
