export default {
  codeProperties: {
    variant: {
      type: 'string',
      label: 'Variant',
      control: 'select',
      defaultValue: 'default',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'outline', label: 'Outline' },
      ],
    },
    size: {
      type: 'string',
      label: 'Size',
      control: 'select',
      defaultValue: 'default',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'sm', label: 'Small' },
        { value: 'lg', label: 'Large' },
      ],
    },
    pressed: { type: 'boolean', label: 'Pressed', defaultValue: false },
    disabled: { type: 'boolean', label: 'Disabled', defaultValue: false },
  },
}
