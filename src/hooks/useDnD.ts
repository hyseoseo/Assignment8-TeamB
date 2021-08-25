import React, { useRef } from 'react';
import { SetState, SetStateArr, IuseDnD } from './types';

const useDnD = <T,>(lists: T[], setLists: SetStateArr<T>): IuseDnD => {
  const draggingItem = useRef<null | number>(null);
  const dragOverItem = useRef<null | number>(null);

  const handleDragStart = (position: number): void => {
    draggingItem.current = position;
  };

  const handleDragEnter = (position: number): void => {
    dragOverItem.current = position;

    const shuffledList: T[] = getShuffledList();

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setLists(shuffledList);
  };

  const handleDragOver = (e: React.DragEvent, setIsDragOver: SetState<boolean>): void => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragEnd = (setIsDragOver: SetState<boolean>): void => {
    setIsDragOver(false);
  };

  const getShuffledList = (): T[] => {
    const newLists: T[] = [...lists];
    const draggingItemContent: T = newLists[draggingItem.current!];

    newLists.splice(draggingItem.current!, 1);
    newLists.splice(dragOverItem.current!, 0, draggingItemContent);

    return newLists;
  };

  return { handleDragStart, handleDragEnter, handleDragOver, handleDragEnd };
};

export default useDnD;
