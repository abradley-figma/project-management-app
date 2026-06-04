export default {
  codeProperties: {
    type: {
      type: 'string',
      label: 'Type',
      control: 'select',
      defaultValue: 'single',
      options: [
        { value: 'single', label: 'Single' },
        { value: 'multiple', label: 'Multiple' },
      ],
    },
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
  },
}
