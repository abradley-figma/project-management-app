export default {
  codeProperties: {
    size: {
      type: 'string',
      label: 'Size',
      control: 'select',
      defaultValue: 'default',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'sm', label: 'Small' },
      ],
    },
    placeholder: { type: 'string', label: 'Placeholder' },
    disabled: { type: 'boolean', label: 'Disabled', defaultValue: false },
  },
}
