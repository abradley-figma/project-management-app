export default {
  codeProperties: {
    type: {
      type: 'string',
      label: 'Type',
      control: 'select',
      defaultValue: 'text',
      options: [
        { value: 'text', label: 'Text' },
        { value: 'email', label: 'Email' },
        { value: 'password', label: 'Password' },
        { value: 'number', label: 'Number' },
        { value: 'search', label: 'Search' },
        { value: 'tel', label: 'Tel' },
        { value: 'url', label: 'URL' },
      ],
    },
    placeholder: { type: 'string', label: 'Placeholder' },
    disabled: { type: 'boolean', label: 'Disabled', defaultValue: false },
  },
}
