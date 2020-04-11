import React from 'react';
import {
  View
} from 'react-native';
import DefaultText from '../../components/DefaultText';
import { GOALS } from '../../data/dummy-data';
import ReactNativeSortableList from 'react-native-sortable-list';
import { Card } from 'react-native-elements';

const PlannerScreen = props => {

  const renderRow = (goal, active) => {
    return (
      <View>
        <Card>
          <DefaultText>{goal.data.title}</DefaultText>
        </Card>
      </View>
    );
  }

  return (
    <React.Fragment>
      <ReactNativeSortableList
      data={GOALS}
      renderRow={renderRow}
      onPressRow={(index) => {
        props.navigation.navigate({
          routeName: 'PlannerGoal',
          params: {
            goalId: GOALS[index].id,
            title: GOALS[index].title,
          }
        });
      }} />
    </React.Fragment>
  );
};

PlannerScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Goals',
  };
};

export default PlannerScreen;
