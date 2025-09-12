import React from 'react'
import { IconSize, iconSizeMap } from './IconTypes'

interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize
  children: React.ReactNode
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  size = 'lg',
  children,
  ...props
}) => {
  const dimension = iconSizeMap[size]

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  )
}

export default IconWrapper
