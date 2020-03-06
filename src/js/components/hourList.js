import React from "react";
import store from "../store/index";

class COptions extends React.Component {

  state = this.getCurrentStateFromStore();
  getCurrentStateFromStore() {
    return {
      hours: store.getState().hours
    };
  }

  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }


  handleChange = (event) => {
    const time = event.target.value
    this.props.sendData(time)
  }



  render() {
    return (
      <select
        defaultValue="Select a Timeslot"
        onChange={this.handleChange}
        id="hour"
      >
        <option disabled>Select a Timeslot</option>
        {this.state.hours.map((el, i) => {
          return (
            <option key={i} value={el.hour}>
              {el.hour}
            </option>
          );
        })}
      </select>
    );
  }
}

export default COptions;
