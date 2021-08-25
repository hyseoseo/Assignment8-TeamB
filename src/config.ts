export const STORAGE_KEYS = {
  todos: 'todos',
};

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

export const dateCountry = 'ko-KR';

export const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
