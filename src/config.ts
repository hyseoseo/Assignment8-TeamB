export const STORAGE_KEYS = {
  todos: "todos",
};

export enum Status {
  completed = "완료",
  notStarted = "시작안함",
  onGoing = "진행중",
}

export const OPTIONS = [Status.notStarted, Status.onGoing, Status.completed];

export const dateCountry = "ko-KR";

export const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
