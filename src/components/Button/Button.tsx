import type { ElementType } from 'react'
import Link from 'next/link'
import { ArrowDownRightIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/helpers/classNames'
import type { ButtonProps } from './Button.constants'

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    as = 'button',
    onClick,
    disabled,
    type = 'button',
    ...rest
  } = props
  const cssBase =
    'inline-flex gap-2 items-center px-6 min-w-[10rem] h-12 rounded-md text-white ' +
    'font-semibold bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 ' +
    'focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const Component: ElementType = as === 'link' ? Link : 'button'
  const componentProps = {
    className: classNames(cssBase, className),
    disabled,
    ...(onClick && { onClick }),
    ...(Component === 'button' && type && { type }),
    ...rest
  }

  return (
    <Component {...componentProps}>
      {children}
      <ArrowDownRightIcon className="w-6 h-6 fill-white ml-auto" />
    </Component>
  )
}
