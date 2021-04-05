import { ReactElement } from "react";

import DraggableItem from "./components/DraggableItem";
import DroppableZone from "./components/DroppableZone";

export type TDraggableListContext = {
  direction: TDraggableListDirection;
  inPortal?: boolean;
  grid: number;
};

export type TDraggableList = JSX.Element & {
  Item: typeof DraggableItem;
  Dropzone: typeof DroppableZone;
};

export type TDraggableListProps<T> = {
  items: (T & { _id: string })[];
  setItems(_: (T & { _id: string })[]): void;
  onDrop?: (_: (T & { _id: string })[]) => void;
  direction?: TDraggableListDirection;
  inPortal?: boolean;
  children: ReactElement<typeof DroppableZone>;
  grid?: number;
};

export type TDraggableListDirection = "vertical" | "horizontal";
