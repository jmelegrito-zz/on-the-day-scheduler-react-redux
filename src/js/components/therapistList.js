import React from "react";
import store from "../store/index";

class TOptions extends React.Component {

  state = this.getCurrentStateFromStore();
  getCurrentStateFromStore() {
    return {
      therapists: store.getState().therapists
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
    const ther = event.target.value
    this.props.sendData(ther)
  }

  render() {
    return (
      <select
        defaultValue="Select a Therapist"
        onChange={this.handleChange}
        id="therapist"
      >
        <option disabled>Select a Therapist</option>
        {this.state.therapists.map((el, i) => {
          return (
            <option key={i} value={el.therapist}>
              {el.therapist}
            </option>
          );
        })}
      </select>
    );
  }
}

export default TOptions;
