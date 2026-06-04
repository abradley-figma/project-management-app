export default {
  codeProperties: {
    min: { type: 'number', label: 'Min', defaultValue: 0 },
    max: { type: 'number', label: 'Max', defaultValue: 100 },
    step: { type: 'number', label: 'Step', defaultValue: 1 },
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
    disabled: { type: 'boolean', label: 'Disabled', defaultValue: false },
  },
}
