import React from 'react';
import {
    View,
    StyleSheet,
    TextInput
  } from 'react-native';
import ReactNativeSortableList from 'react-native-sortable-list';
import { TASKS } from '../../data/dummy-data';
import { Card } from 'react-native-elements';
import DefaultText from '../../components/DefaultText';

const PlannerMilestoneScreen = props => {
    const milestoneId = props.navigation.getParam('milestoneId');
    const milestoneTitle = props.navigation.getParam('title');
    const displayedTasks = TASKS.filter(
      task => task.milestoneId == milestoneId
    );
    const renderRow = (task, active) => {
      return (
        <View>
          <Card>
            <DefaultText>{task.data.title}</DefaultText>
          </Card>
        </View>
      );
    }
  
    return (
      <View>
        <View>
          <TextInput>{milestoneTitle}</TextInput>
        </View>
        <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
        />
        <View>
          <ReactNativeSortableList
            data={displayedTasks}
            renderRow={renderRow}
            onPressRow={(index) => {
              props.navigation.navigate({
                routeName: 'PlannerTask',
                params: {
                  task: displayedTasks[index]
                }
              });
            }} />
        </View>
      </View>
    );
};

PlannerMilestoneScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Tasks',
  };
};

export default PlannerMilestoneScreen;
