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
        className="form-control cardList"
        required
      >
        <option value="" hidden>Select a Therapist</option>
        {this.state.therapists.map((el, i) => {
          let person = el.therapist + " - " + el.specialization
          return (
            <option key={i} value={person}>
              {el.therapist} - {el.specialization}
            </option>
          );
        })}
      </select>
    );
  }
}

export default TOptions;
