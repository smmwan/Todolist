import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Popconfirm } from 'antd'

const TodoList = ({onDelete, todos, onDetail}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Content',
      dataIndex: 'content'
    },
    {
      title: 'Action',
      render: (index, item) => {
        return (
          <div>
            <Popconfirm title="Delete?" onConfirm={() => onDelete(item.id)}>
              <Button>Delete</Button>
            </Popconfirm>
          </div>
        )
      }
    },
    {
      title: 'Detail',
      render: (index, item) => {
        return (
          <Button type="primary" onClick={() => {onDetail(item)}}>
            查看详情>>
          </Button>
        )
      }
    },
  ]

  return (
    <Table
      rowKey={'id'}
      dataSource={todos}
      columns={columns}
    />
  )
}

TodoList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

export default TodoList
