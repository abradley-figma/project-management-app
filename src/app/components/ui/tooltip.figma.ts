export default {
  codeProperties: {
    side: {
      type: 'string',
      label: 'Side',
      control: 'select',
      defaultValue: 'top',
      options: [
        { value: 'top', label: 'Top' },
        { value: 'right', label: 'Right' },
        { value: 'bottom', label: 'Bottom' },
        { value: 'left', label: 'Left' },
      ],
    },
  },
}
