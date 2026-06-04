export default {
  codeProperties: {
    align: {
      type: 'string',
      label: 'Align',
      control: 'select',
      defaultValue: 'center',
      options: [
        { value: 'start', label: 'Start' },
        { value: 'center', label: 'Center' },
        { value: 'end', label: 'End' },
      ],
    },
    defaultOpen: { type: 'boolean', label: 'Default open', defaultValue: false },
  },
}
