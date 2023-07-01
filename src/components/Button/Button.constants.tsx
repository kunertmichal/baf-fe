import type { MouseEventHandler, ReactNode } from 'react'

export type BaseButtonProps = {
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export type ButtonAsButtonProps = BaseButtonProps & {
  as?: 'button'
}

export type ButtonAsLinkProps = BaseButtonProps & {
  as: 'link'
  href: string
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps
