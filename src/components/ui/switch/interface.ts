import { ReactNode } from "react";

export default interface PropsType {
  icon?: ReactNode;
  status: 1 | 0;
  onChange: () => void;
}
