import TaskList from './TaskList.svelte';

import { render } from '@testing-library/svelte';

import { WithPinnedTasks } from './PureTaskList.stories'; //👈  Our story imported here

import { tasks } from '../store';

test('renders pinned tasks at the start of the list', () => {
  tasks.set(WithPinnedTasks.args.tasks);

  //👇 Story's args used with our test
  const { container } = render(TaskList);
  expect(
    container.children[0].firstChild.children[0].classList.contains(
      'TASK_PINNED',
    ),
  ).toBe(true);
});
