import { classNames } from '@/helpers/classNames'

type BackgroundColumnProps = {
  bgClassName: 'bg-main' | 'bg-plot'
}

export const BackgroundColumn = ({ bgClassName }: BackgroundColumnProps) => {
  return (
    <div
      className={classNames(
        'min-h-[calc(100vh-5rem)] bg-cover bg-center',
        bgClassName
      )}
    />
  )
}
