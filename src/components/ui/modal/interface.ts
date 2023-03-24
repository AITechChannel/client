import { ReactNode } from 'react';

export interface PropsType {
  children: ReactNode;
  onOK?: () => void;
  onCancel: () => void;
  visible: Boolean;
  title?: String;
  offClickOutSide?: boolean;
}
