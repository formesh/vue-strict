<template>
  <HelloWorldWithLoading msg="Hello Vue 3!" loading />
  <ConfigTable :data="tableData" :columns="columns" />
</template>

<script setup lang="tsx">
import { ConfigTable, withLoading } from '@repo/ui'
import { ElTag, ElButton } from 'element-plus'
import { HelloWorld } from '@repo/ui'

const HelloWorldWithLoading = withLoading(HelloWorld)

// 数据类型
interface TableRow {
  id: number
  name: string
  status: number
}

// 表格数据
const tableData: TableRow[] = [
  { id: 1, name: '张三', status: 1 },
  { id: 2, name: '李四', status: 0 }
]

// 操作方法
const handleEdit = (row: TableRow) => {
  console.log('编辑', row)
}

const handleDelete = (row: TableRow) => {
  console.log('删除', row)
}

// 列配置
const columns = [
  {
    label: '姓名',
    prop: 'name' as const
  },
  {
    label: '状态',
    render: (row: TableRow) => (
      <ElTag type={row.status === 1 ? 'success' : 'danger'} >
        {row.status === 1 ? '启用' : '禁用'}
      </ElTag>
    )
  },
  {
    label: '操作',
    render: (row: TableRow) => (
      <>
        <ElButton onClick={() => handleEdit(row)}> 编辑 </ElButton>
        <ElButton type="danger" onClick={() => handleDelete(row)}>
          删除
        </ElButton>
      </>
    )
  }
]
</script>
