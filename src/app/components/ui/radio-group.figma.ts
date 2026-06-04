export default {
  codeProperties: {
    defaultValue: { type: 'string', label: 'Default value' },
    orientation: {
      type: 'string',
      label: 'Orientation',
      control: 'select',
      options: [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
      ],
    },
    disabled: { type: 'boolean', label: 'Disabled', defaultValue: false },
  },
}
