export enum Status {
  todo = 'To do',
  progress = 'In progress',
  done = 'Done',
}

export enum FilterType {
  bookmark,
  status,
  none,
}

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  isBookmarked: boolean;
  isVisible: boolean;
}

export const OPTIONS = [Status.todo, Status.progress, Status.done];
