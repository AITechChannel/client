/* global HTMLElement */
import React, { ReactNode } from 'react'
import * as CONSTANT from './constant'
export type MapType = {
  [key: string]: string
}

declare const ButtonHTMLTypes: ['submit', 'button', 'reset']

export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export interface TypePropsStyle {
  dense?: keyof typeof CONSTANT.DENSE
  type?: keyof typeof CONSTANT.TYPE
  rounded?: keyof typeof CONSTANT.ROUNDED
  size?: keyof typeof CONSTANT.SIZE
  sizeIcon?: keyof typeof CONSTANT.SIZE_ICON
  themeIcon?: keyof typeof CONSTANT.THEME_ICON
  visible?: boolean
  animationClick?: boolean
}

export interface TypeProps extends TypePropsStyle {
  children: ReactNode
  name?: string
  className?: string
  status?: boolean
  fullWidth?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export type AnchorButtonProps = {
  href?: string
  target?: string
  to?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & TypeProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>

export type ButtonProps = Partial<AnchorButtonProps>
