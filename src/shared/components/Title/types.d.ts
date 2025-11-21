import type { ComponentProps } from 'react'

export type TitleProps = ComponentProps<'div'> & {
  description?: string
}
