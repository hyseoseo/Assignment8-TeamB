import { ButtonType } from 'hooks/types';

export const STORAGE_KEYS = {
  todos: 'todos',
};

export const dateCountry = 'en-US';

export const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const FILTER_OPTION = {
  STATUS: 'status',
  IMPORTANT: 'important',
};

export const TO_MILISECONDS = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000,
};

export const BASE_MODAL_OPTION = {
  title: 'Please, select your modal option',
  content: "You can define the modal option in 'config.js'",
  buttonType: ButtonType.ok,
};

export const MODAL_OPTION = {
  ERROR: {
    title: 'Error, input is wrong',
    content: 'An input can not be a blank. Please fill out the input and try again.',
    buttonType: ButtonType.ok,
  },
  DELETE: {
    title: 'Are you sure to delete this task?',
    content: '"jh" (To do, bookmarked) updated 5 mins ago',
    buttonType: ButtonType.delete,
  },
};
