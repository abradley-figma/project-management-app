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
    collapsible: { type: 'boolean', label: 'Collapsible', defaultValue: false },
  },
}
