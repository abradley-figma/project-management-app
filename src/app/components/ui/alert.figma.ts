export default {
  codeProperties: {
    variant: {
      type: 'string',
      label: 'Variant',
      control: 'select',
      defaultValue: 'default',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'destructive', label: 'Destructive' },
      ],
    },
  },
}
