import * as CONSTANT from './constant';
import { ButtonProps, MapType, TypePropsStyle } from './type';

import styles from './style.module.scss';

const KEYS_STYLE: { [key: string]: MapType } = {
  dense: CONSTANT.DENSE as MapType,
  rounded: CONSTANT.ROUNDED as MapType,
  type: CONSTANT.TYPE as MapType,
  themeIcon: CONSTANT.THEME_ICON as MapType,
  size: CONSTANT.SIZE as MapType,
  sizeIcon: CONSTANT.SIZE_ICON
};

const renderClassNames = (props: TypePropsStyle) => {
  const keyProps = { ...props } as MapType;
  let classNames = ['btn'];
  Object.keys(props).map((_item: any) => {
    return (classNames = [...classNames, KEYS_STYLE[_item][keyProps[_item]]]);
  });
  return classNames
    .filter((_class: any) => _class)
    .map((_class: any) => styles[_class])
    .join(' ');
};

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    type = 'primary',
    size,
    rounded = 'full',
    animationClick = true,
    fullWidth = true,
    iconLeft,
    iconRight,
    dense,
    to,
    href,
    ...other
  } = props;

  let Cmp = 'button';

  if (href) {
    Cmp = 'a';
  }
  if (to) {
    //@ts-ignore
    Cmp = 'Link';
  }

  return (
    //@ts-ignore
    <Cmp
      className={`${renderClassNames({ type, rounded, size, dense })} ${
        animationClick && 'btn-active-scale'
      } 
          ${fullWidth && 'btn-full-width'}         
          ${className && className}`}
      {...other}
    >
      {iconLeft}
      {children && (
        <span
          className={`${iconLeft && 'btn-icon-left'} ${
            iconRight && 'btn-icon-right'
          }`}
        >
          {children}
        </span>
      )}
      {iconRight}
    </Cmp>
  );
};

export default Button;
