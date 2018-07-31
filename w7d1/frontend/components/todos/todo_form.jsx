import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

  }
  setInput(arg,e) {
    e.preventDefault();
    const val = e.target.value;
    this.setState( {[arg]: val} );
  }

  render() {
    let todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body
    };
    return (
      <div>
        <label>Title:
          <input onChange={this.setInput.bind(this,"title")} value={this.state.title} />
        </label>

        <label>Body:
          <textarea onChange={this.setInput.bind(this,"body")} defaultValue={this.state.body}></textarea>
        </label>

        <button onClick={() => this.props.receiveTodo(todo)}>Create Todo!</button>
      </div>
    );
  }
}

export default TodoForm;
