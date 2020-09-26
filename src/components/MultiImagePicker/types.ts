import { CSSProperties } from "react";
import { DropzoneOptions, FileRejection } from "react-dropzone";

export interface IMultiImagePickerProps {
  images?: ((File & { preview: string }) | string)[];
  setImages: (images: ((File & { preview: string }) | string)[]) => void;
  errorMessage?: string;
  onDropRejected?: (error: FileRejection[]) => void;
  options?: DropzoneOptions;
  style?: CSSProperties;
}
