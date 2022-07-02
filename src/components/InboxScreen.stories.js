import InboxScreen from './InboxScreen.svelte';

export default {
  component: InboxScreen,
  title: 'InboxScreen',
};

const Template = (args) => ({
  Component: InboxScreen,
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};
