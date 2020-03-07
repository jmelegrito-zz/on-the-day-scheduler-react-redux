import React from "react";
import store from "../store/index";

class SOptions extends React.Component {

  state = this.getCurrentStateFromStore();
  getCurrentStateFromStore() {
    return {
      specialization: store.getState().specialization
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
    const spec = event.target.value
    this.props.sendData(spec)
  }

  render() {
    return (
      <select
        defaultValue="Select a Specialization"
        onChange={this.handleChange}
        id="special"
        className="form-control cardList"
        required
      >
        <option value="" hidden>Select a Specialization</option>
        {this.state.specialization.map((el, i) => {
          return (
            <option key={i} value={el.type}>
              {el.type}
            </option>
          );
        })}
      </select>
    );
  }
}

export default SOptions;
