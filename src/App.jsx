import React, { Component } from "react";
import { data } from "./data";
export default class App extends Component {
  state = {
    data: data,
    active: null,
  };

  render() {
    const onEdit = (e) => {
      console.log(e);
      this.setState({ active: e });
    };
    const onChange = (e) => {
      const { value, name } = e.target;
      this.setState({
        active: {
          ...this.state.active,
          [name]: value,
        },
      });
    };
    const onSave = () => {
      let res = this.state.data.map((value) =>
        value.id === this.state.active.id ? this.state.active : value
      );
      this.setState({ data: res, active: null });
    };
    return (
      <div>
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(({ id, name, status }, index) => (
              <tr key={index}>
                <td>{this.state.active === id ? <input value={id} /> : id}</td>
                <td>
                  {this.state.active?.id === id ? (
                    <input
                      name="name"
                      onChange={onChange}
                      value={this.state.active.name}
                    />
                  ) : (
                    name
                  )}
                </td>
                <td>
                  {this.state.active?.id === id ? (
                    <input
                      name="status"
                      onChange={onChange}
                      value={this.state.active.status}
                    />
                  ) : (
                    status
                  )}
                </td>
                <td>
                  <button>delete</button>
                  <button
                    onClick={() => {
                      this.state.active
                        ? onSave()
                        : onEdit({ id, name, status });
                    }}
                  >
                    {this.state?.active?.id === id ? "save" : "edit"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
