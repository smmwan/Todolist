import React ,{Component} from 'react'
import { connect } from 'dva'
import TodoList from '../components/TodoList'
import Edit from '../components/Edit'
import { Modal,Button } from 'antd'



class Todos extends Component{
  state={
    item:{},
    show:true,
    visible:false,
    changeInput:''
  }

  onUpdate=(item)=>{
    this.setState({item:item})
  }

  handleDelete= (id) =>{
    this.props.dispatch({
      type: 'todos/delete',
      payload: id,
    })
  }


  onDetail = (item) => {
    this.setState({
      visible: true,
      changeInput:item
    });
  }


  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render(){
    const {todos} = this.props
    const {item,visible,changeInput} = this.state
    return (
      <div>

        <Modal
          title={changeInput.name}
          visible={visible}
          onCancel={this.handleCancel}
          footer={<Button onClick={this.onUpdate}>update</Button>}
        >
          {changeInput.content}
        </Modal>

        <TodoList onDelete={this.handleDelete} todos={todos}  onUpdate={this.onUpdate}
          onOver={this.onOver}  onDetail={this.onDetail}  handleCancel={this.handleCancel}
        />

        <Edit  item={item}/>

      </div>
    )
  }
}

export default connect(({todos}) => ({todos}))(Todos)

