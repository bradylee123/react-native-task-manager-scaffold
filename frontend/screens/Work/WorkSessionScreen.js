import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Clock from '../../components/Timer/Clock';
import TimerButton from '../../components/Timer/TimerButton';

function leftPadding(n) {
  if (parseInt(n) < 10) {
    return "0" + n.toString();
  } else {
    return n.toString();
  }
}

function getTime(val) {
  return leftPadding(val) + ":00";
}

class WorkSessionScreen extends Component {

  constructor(props) {
    super(props),
    this.state = {
      currentTime: "25:00",
      workTime: "25:00",
      breakTime: "05:00",
      working: true,
      timer: null,
      paused: false,
      playing: false,
      totalSeconds: 25 * 60,
      percent: 0
    }
    this.setWorkTimer = this.setWorkTimer.bind(this);
    this.setBreakTimer = this.setBreakTimer.bind(this);
    this.playButton = this.playButton.bind(this);
    this.pauseButton = this.pauseButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.countdown = this.countdown.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  setWorkTimer(val) {
    let newTime = getTime(val);
    this.setState({
      workTime: newTime,
    });
    if (!this.state.timer) {
      this.setState({
        currentTime: newTime,
      });
    }      
  }

  setBreakTimer(val) {
    let newTime = getTime(val);
    this.setState({
      breakTime: newTime,
    });
  }

  playButton() {
    if (this.state.paused === true || this.state.playing === false) { 
      this.setState({
        timer: setInterval(this.countdown, 1000),
        paused: false,
        playing: true,
      });
    }
  }

  pauseButton () {
    if (this.state.paused === false && this.state.playing === true) {
      clearInterval(this.state.timer);
      this.setState({
        paused: true,
        timer: null,
        playing: false
      });
    } else if (this.state.paused === true && this.state.playing === false) {
      this.playButton();
    }       
  }

  resetButton () {
    this.pauseButton();
    this.setState({
      currentTime: this.state.workTime,
      playing: false,
      paused: false,
      working: true,
      timer: null
    })
  }

  countdown() {
    if (this.state.currentTime === "00:00" && this.state.playing === true) {
      vibrate();
      this.toggleStatus();
    } else {
      let sec = this.state.currentTime.slice(3);
      let min = this.state.currentTime.slice(0, 2);
      if (sec === "00") {
        let newMin = leftPadding(parseInt(min) - 1);
        let newTime = newMin + ":59";
        let newSecondsLeft = parseInt(min) * 60 + 59;
        let newPercent = newSecondsLeft / this.state.totalSeconds;
        this.setState({
          currentTime: newTime,
          percent: newPercent
        });
      } else {
        let newSec = leftPadding((parseInt(sec) - 1));
        let newTime = min + ":" + newSec;
        let secondsLeft = parseInt(min) * 60 + parseInt(sec);
        let newPercent = secondsLeft / this.state.totalSeconds;
        this.setState({
          currentTime: newTime,
          percent: newPercent
        })
      }
    }
  }

  toggleStatus() {
    if (this.state.working) {
      this.setState({
        working: false,
        currentTime: this.state.breakTime,
      })
    } else {
      this.setState({
        working: true,
        currentTime: this.state.workTime,
      })
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <View>
          <Clock
            time={this.state.currentTime}
            percent={this.state.percent} />
        </View>
        <View style={styles.buttonContainer}>
          <TimerButton title="Play" onPress={this.playButton} />
          <TimerButton title="Pause" onPress={this.pauseButton} />
        </View>
      </View>
    );
  }
};

WorkSessionScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Work',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '90%'
  },
  listContainer: {
    flex: 1,
    width: '60%'
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default WorkSessionScreen;
