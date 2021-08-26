import React from 'react';

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type SetStateArr<T> = React.Dispatch<React.SetStateAction<T[]>>;
export type UseStorage<T> = [T, React.Dispatch<React.SetStateAction<T>>];
export type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export interface IuseInput {
  value: string;
  clearValue: () => void;
  handleChange: (e: ChangeEvent) => void;
}

export interface IuseDnD {
  handleDragStart: (position: number) => void;
  handleDragEnter: (position: number) => void;
  handleDragOver: (e: React.DragEvent, setIsDragOver: SetState<boolean>) => void;
  handleDragEnd: (setIsDragOver: SetState<boolean>) => void;
}

export interface IuseModal {
  isVisible: boolean;
  ModalComponent: React.FC | null;
  openModal: (component: React.FC) => void;
  closeModal: () => void;
}
