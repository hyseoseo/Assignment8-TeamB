export enum Status {
  notStarted = 'To do',
  onGoing = 'In progress',
  completed = 'Done',
}

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  isImportant: boolean;
}

export const OPTIONS = [Status.notStarted, Status.onGoing, Status.completed];
