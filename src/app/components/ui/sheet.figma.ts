export default {
  codeProperties: {
    side: {
      type: 'string',
      label: 'Side',
      control: 'select',
      defaultValue: 'right',
      options: [
        { value: 'top', label: 'Top' },
        { value: 'right', label: 'Right' },
        { value: 'bottom', label: 'Bottom' },
        { value: 'left', label: 'Left' },
      ],
    },
    defaultOpen: { type: 'boolean', label: 'Default open', defaultValue: false },
  },
}
