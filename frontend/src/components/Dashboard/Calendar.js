import React, { Component } from 'react';
import Calendar from 'react-calendar';

class CalendarIO extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="calendarContainer">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default CalendarIO