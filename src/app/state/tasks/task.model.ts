export interface Tasks {
  list: Task[];
  state: 'empty' | 'loading' | 'loaded' | 'failure';
}

export interface Task {
  id: number;
  name: string;
}
