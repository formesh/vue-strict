// ConfigTable.tsx
import { defineComponent, type PropType, type VNodeChild } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'

// 定义列配置类型，支持自定义渲染
interface TableColumn<T = Record<string, any>> {
  label: string
  prop?: keyof T
  width?: number | string
  render?: (row: T) => VNodeChild
}

export default defineComponent({
  name: 'ConfigTable',

  props: {
    data: {
      type: Array as PropType<Record<string, any>[]>,
      required: true,
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      required: true,
    },
  },

  setup(props) {
    return () => (
      <ElTable data={props.data}>
        {props.columns.map((column, index) => (
          <ElTableColumn
            key={index}
            label={column.label}
            prop={column.prop as string}
            width={column.width}
          >
            {{
              default: ({ row }: { row: Record<string, any> }) => {
                // 优先使用自定义渲染
                if (column.render) {
                  return column.render(row)
                }

                // 默认展示 prop 对应值
                return column.prop ? row[column.prop] : null
              },
            }}
          </ElTableColumn>
        ))}
      </ElTable>
    )
  },
})
