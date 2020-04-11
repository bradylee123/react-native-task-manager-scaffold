import React from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import ReactNativeSortableList from 'react-native-sortable-list';
import DefaultText from '../../components/DefaultText';
import { MILESTONES } from '../../data/dummy-data';
import { Card } from 'react-native-elements';

const PlannerGoalScreen = props => {

  const goalId = props.navigation.getParam('goalId');
  const goalTitle = props.navigation.getParam('title');

  const displayedMilestones = MILESTONES.filter(
    milestone => milestone.goalId == goalId
  );

  const renderRow = (milestone) => {
    return (
      <View>
        <Card>
          <DefaultText>{milestone.data.title}</DefaultText>
        </Card>
      </View>
    );
  }

  return (
    <View>
      <View>
        <TextInput>{goalTitle}</TextInput>
      </View>
      <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
      />
      <View>
        <ReactNativeSortableList
          data={displayedMilestones}
          renderRow={renderRow}
          onPressRow={(index) => {
            props.navigation.navigate({
              routeName: 'PlannerMilestone',
              params: {
                milestoneId: displayedMilestones[index].id,
                title: displayedMilestones[index].title
              }
            });
          }} />
        </View>
    </View>
  );
};

PlannerGoalScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Milestones'
  };
};

export default PlannerGoalScreen;
