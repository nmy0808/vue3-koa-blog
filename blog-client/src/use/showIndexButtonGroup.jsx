import { defineComponent } from 'vue';
export const buttonGroup = defineComponent({
  props: {
    config: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const buttonGroup = props.config.map((item) => (
      <a-button onClick={item.handle} style={{margin:"17px"}}>
        {item.icon}
        {item.text}
      </a-button>
    ));
    return () => <div>{buttonGroup}</div>;
  },
});
