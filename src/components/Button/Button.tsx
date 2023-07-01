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
    ...rest
  } = props
  const cssBase =
    'inline-flex items-center px-6 min-w-[12rem] h-12 rounded-md text-white font-semibold bg-orange-400'

  const Component: ElementType = as === 'link' ? Link : 'button'
  const componentProps = {
    className: classNames(cssBase, className),
    ...(onClick && { onClick }),
    ...rest
  }

  return (
    <Component {...componentProps}>
      {children}
      <ArrowDownRightIcon className="w-6 h-6 fill-white ml-auto" />
    </Component>
  )
}
