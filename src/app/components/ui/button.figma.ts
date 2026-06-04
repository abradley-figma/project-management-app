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
        { value: 'outline', label: 'Outline' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'ghost', label: 'Ghost' },
        { value: 'link', label: 'Link' },
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
        { value: 'icon', label: 'Icon' },
      ],
    },
    disabled: { type: 'boolean', label: 'Disabled', defaultValue: false },
  },
}
