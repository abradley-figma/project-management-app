export default {
  codeProperties: {
    orientation: {
      type: 'string',
      label: 'Orientation',
      control: 'select',
      defaultValue: 'horizontal',
      options: [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
      ],
    },
  },
}
