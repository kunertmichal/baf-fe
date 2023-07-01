import type { ReactNode } from 'react'
import { classNames } from '@/helpers/classNames'

type DefaultLayoutProps = {
  children: ReactNode
  className?: string
}

export const DefaultLayout = ({ children, className }: DefaultLayoutProps) => {
  return <div className={classNames('pt-20', className)}>{children}</div>
}
