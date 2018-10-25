import React, { Component } from 'react'
import { connect } from 'dva'
import { Input, Card, Button } from 'antd'

class Edit extends Component {
  state = {
    input: '',
    isAdd:true,
    newInput: '',
    index:'',
    one:''
  }

  componentWillReceiveProps (nextProps) {
    // 函数在收到新的props（父组件传来的参数），就立马执行这个函数
    // 如果该函数执行，说明收到了兄弟组件传来的参数，那么就设置isAdd为false（设定他是要编辑的）
    this.setState({input:nextProps.item.name,newInput:nextProps.item.content,index:nextProps.item.number,
      one:nextProps.item.detail,isAdd:false})
  }

  handleChangeInput=(event,name)=>{
    let value = {};
    value[name]=event.target.value
    this.setState(value)
  }


  onEdit = () => {
    const {input,isAdd,newInput,index,one} = this.state
    if(isAdd) {
      const item = {
        name: input,
        content: newInput,
        number: index,
        detail: one,
        id: (new Date()).valueOf()
      }
      // console.log(item)
      // 清空输入框内容
      this.setState({input: '',newInput:'',index:'',one:''})
      // submit

      // 通过dispatch 调用action方法
      const {dispatch} = this.props
      dispatch({
        type: 'todos/add',
        payload: item,
      })
    }
    else{
      const {item} = this.props
      console.log(item)
      const newItem={
        id:item.id,
        name:input,
        content: newInput,
        number:index,
        detail:one,
      }
      this.setState({input: '',isAdd:true,newInput:'',index:'',one:''})
      const {dispatch} = this.props
      dispatch({
        type: 'todos/update',
        payload: newItem,
      })
    }
    // TODO：应该干什么
    // 将现有的数据格式化为store中使用的格式
  }



  render () {
    const {input,isAdd,newInput} = this.state
    return (
      <Card style={{marginTop:300}}>
        <h4>name</h4>
        <Input
          value={input}
          name={'name'}
          onChange={(event)=>{this.handleChangeInput(event,'input')}}
        />
        <h4>content</h4>
        <Input
          value={newInput}
          name={'content'}
          onChange={(event)=>{this.handleChangeInput(event,'newInput')}}
        />
        <Button type="primary" disabled={!input} onClick={this.onEdit}>{isAdd?'添加':'编辑'}</Button>
      </Card>
    )
  }

}

export default connect()(Edit)

