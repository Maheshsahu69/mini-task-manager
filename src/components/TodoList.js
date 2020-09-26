import React from "react";
import './TodoList.css';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
       inputText:''
    };
  }

  //Method
  edit = () => {
     
    this.setState({editing:true})
  };
  delete = () => {
        this.props.onDelete(this.props.index)
        console.log("i",this.props.index);
  };
  save = () =>{
    this.setState({editing:false})
    var text=this.state.inputText
    this.props.onSave(text, this.props.index)
  }
  defaultRender = () =>{
    return(
      <div className="todo">
      <h4>
       {this.props.task}
      </h4>
      <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
      <button className="btn btn-warning glyphicon glyphicon-trash" onClick={this.delete}></button>
    </div>
    )
  }

  editRender = () =>{ 
    return(
      <div className="todo">
        <textarea defaultValue={this.props.children} onChange={(e)=>{this.setState({inputText:e.target.value})}}></textarea> 
      <button className="btn btn-success glyphicon glyphicon-floppy-disk" onClick={this.save}></button>
    </div>
    )
  }
  render() {
    return <div className="todo-list">
      {!this.state.editing && this.defaultRender()}
      {this.state.editing && this.editRender()}
    </div>;
  }
}

export default TodoList ;