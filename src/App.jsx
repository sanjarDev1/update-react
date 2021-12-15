import React, { Component } from 'react'
import {data} from "./data"
export default class App extends Component {
  state = {
    data: data,
    active: null
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.active ? "Edit" : "Save"}</h1>
        <table border='1' width='100%'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map(({id , name, status},index)=>(
                <tr key={index}>
                  <td>{this.state.active === id ? <input value={id} /> : id}</td>
                  <td>{name}</td>
                  <td>{status}</td>
                  <td>
                    <button>delete</button>
                    <button>edit</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
