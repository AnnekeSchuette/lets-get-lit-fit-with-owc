import { html, TemplateResult } from 'lit';
import '../src/legit-lit-app.js';

export default {
  title: 'LegitLitApp',
  component: 'legit-lit-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <legit-lit-app
    style="--legit-lit-app-background-color: ${backgroundColor}"
    .header=${header}
  ></legit-lit-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
