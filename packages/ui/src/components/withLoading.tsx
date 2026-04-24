import { defineComponent, type Component, h } from 'vue'

export function withLoading<T extends Component>(WrappedComponent: T) {
  return defineComponent({
    name: `WithLoading${(WrappedComponent as any).name || ''}`,

    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      ...(WrappedComponent as any).props,
    },

    setup(props: any, { attrs, slots }) {
      return () => {
        if (props.loading) {
          return (
            <div
              class="loading-wrapper"
              v-loading={props.loading}
              style={{ width: '100%', height: '100%' }}
            />
          )
        }

        return h(
          WrappedComponent,
          {
            ...props,
            ...attrs,
          },
          slots,
        )
      }
    },
  }) as T
}