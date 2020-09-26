import React from 'react';
import "./App.css";
import TodoList from './components/TodoList';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        tasks:['A','B','C','D']
    }
  
  }

  // Method
  addToList = (newText) =>{
    var taskArr = this.state.tasks;
    taskArr.push(newText)
    this.setState({tasks:taskArr});
  }
  editList = (newText, i) =>{
    var taskArr= this.state.tasks;
    taskArr[i]=newText;
    this.setState({tasks:taskArr});
    console.log("after edit Tasks",this.state.tasks);
  }

  deleteFromList = (i) =>{
      var taskArr = this.state.tasks;
      taskArr.splice(i,1);
      this.setState({tasks:taskArr});
      console.log("after delete Tasks",this.state.tasks);
  }
    
    eachTask = (task,i) =>{
    return (<div key={i}><TodoList task={task} index={i} onSave={this.editList} onDelete={this.deleteFromList}> {task}</TodoList></div>)
    }
    
    render(){
    return (
        <div>
            {this.state.tasks.map(this.eachTask)}
            <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.addToList.bind(null,"New Task")}></button>
         </div>
    )
    }
}
export default App ;
