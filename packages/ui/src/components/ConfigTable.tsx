import { defineComponent, type PropType, type VNodeChild } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'

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
      type: Array as PropType<any[]>,
      required: true,
    },
    columns: {
      type: Array as PropType<TableColumn<any>[]>,
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
                if (column.render) {
                  return column.render(row)
                }
                return column.prop ? row[column.prop as any] : null
              },
            }}
          </ElTableColumn>
        ))}
      </ElTable>
    )
  },
})
