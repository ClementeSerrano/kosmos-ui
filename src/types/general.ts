export type WithId<T = {}> = T & { _id: string };

export type Distinct<T> = WithId<T> & { createdAt: Date; updatedAt: Date };

export type TDirection = "up" | "down" | "left" | "right";

export type TPosition = "top" | "bottom" | "center";
