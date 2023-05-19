import * as React from 'react'

interface Props {
  text: string
}

export const Button = ({ text }: Props) => {
  return <button className='text-rose-500 bg-neutral-600'>{text}</button>
}
