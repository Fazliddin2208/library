import {ReactNode} from "react";

export interface IRoutesModel {
  path: string;
  page: ReactNode;
  icon: ReactNode;
  permission?: string;
  children?: IRoutesModel[];
}
