import React from 'react';
import { Heading, Task } from '@components/styled-components/Task';
import UserList from '@components/taskone/UserList';

const TaskOne = () => (
  <Task>
    <Heading>Task One</Heading>
    <UserList />
  </Task>
);

export default TaskOne;
