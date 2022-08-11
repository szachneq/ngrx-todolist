export interface Tasks {
  list: Task[];
  state: 'initial' | 'loading' | 'loaded' | 'failure';
}

export interface Task {
  id: number;
  name: string;
}
