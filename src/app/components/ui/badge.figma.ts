export default {
  codeProperties: {
    variant: {
      type: 'string',
      label: 'Variant',
      control: 'select',
      defaultValue: 'default',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'destructive', label: 'Destructive' },
        { value: 'outline', label: 'Outline' },
      ],
    },
  },
}
