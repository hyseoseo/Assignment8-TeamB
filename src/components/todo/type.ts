export enum Status {
  completed = '완료',
  notStarted = '시작안함',
  onGoing = '진행중',
}

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export const OPTIONS = [Status.notStarted, Status.onGoing, Status.completed];
