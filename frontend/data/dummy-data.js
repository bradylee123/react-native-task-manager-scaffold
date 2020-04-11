import Goal from '../models/goal';
import Milestone from '../models/milestone';
import Task from '../models/task';

export const GOALS = [
    new Goal(123, 1, "Goal A", 18000, new Date(2019, 12, 31)),
    new Goal(456, 1, "Goal B", 18000, new Date(2019, 12, 31))
];

export const MILESTONES = [
    new Milestone('m5676868', 123, 'Milestone A', 36000, '2020-04-01'),
    new Milestone('m2354657', 123, 'Milestone B', 18000, '2020-05-01'),
    new Milestone('m3481235', 456, 'Milestone C', 18000, '2020-05-01')
];

export const TASKS = [
    new Task('t5676868', 'm5676868', 'Task A', 1800, []),
    new Task('t2354657', 'm2354657', 'Task B', 1800, []),
    new Task('t2325242', 'm3481235', 'Task C', 1800, []),
    new Task('t8937250', 'm3481235', 'Task D', 1800, []),
    new Task('t325r425', 'm3481235', 'Task E', 1800, []),
];