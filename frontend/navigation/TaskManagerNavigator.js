import React from 'react';
import { Platform, Text } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import PlannerScreen from '../screens/Planner/PlannerScreen';
import PlannerGoalScreen from '../screens/Planner/PlannerGoalScreen';
import PlannerMilestoneScreen from '../screens/Planner/PlannerMilestoneScreen';
import PlannerTaskScreen from '../screens/Planner/PlannerTaskScreen';
import WorkSessionScreen from '../screens/Work/WorkSessionScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

const PlannerNavigator = createStackNavigator(
  {
    Planner: {
      screen: PlannerScreen
    },
    PlannerGoal: {
      screen: PlannerGoalScreen
    },
    PlannerMilestone: {
      screen: PlannerMilestoneScreen
    },
    PlannerTask: {
      screen: PlannerTaskScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const WorkNavigator = createStackNavigator(
  {
    WorkSession: {
      screen: WorkSessionScreen
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Planner: {
    screen: PlannerNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="md-compass" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Planner</Text>
        ) : (
          'Planner'
        )
    }
  },
  Work: {
    screen: WorkNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-hammer" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Work</Text>
        ) : (
          'Work'
        )
    }
  }
};

const PlannerWorkTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans'
          },
          activeTintColor: Colors.accentColor
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    SummaryPlannerWork: {
      screen: PlannerWorkTabNavigator,
      navigationOptions: {
        drawerLabel: 'Task Manager'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);
