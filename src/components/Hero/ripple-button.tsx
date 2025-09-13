import React, { useState } from "react"

interface RippleButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'default' | 'secondary' | 'primary'
}

export default function RippleButton({ children, className = "", onClick, href, variant = 'default' }: RippleButtonProps) {
  const [rippleStyle, setRippleStyle] = useState<{ x: number; y: number } | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setRippleStyle({ x, y })
  }

  const handleMouseLeave = () => {
    setRippleStyle(null)
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'hsl(var(--secondary))',
          color: 'hsl(var(--secondary-foreground))',
          rippleColor: 'hsl(var(--secondary-foreground))',
          hoverColor: 'hsl(var(--primary-foreground))'
        }
      case 'primary':
        return {
          backgroundColor: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
          rippleColor: 'hsl(var(--primary-foreground))',
          hoverColor: 'hsl(var(--primary))'
        }
      default:
        return {
          backgroundColor: 'white',
          color: '#1a1a1a',
          rippleColor: '#1a1a1a',
          hoverColor: 'white'
        }
    }
  }

  const variantStyles = getVariantStyles()
  const Component = href ? 'a' : 'button'

  return (
    <>
      <style>{`
        .ripple-button {
          position: relative;
          display: inline-block;
          padding: 12px 32px;
          background-color: ${variantStyles.backgroundColor};
          color: ${variantStyles.color};
          border-radius: 9999px;
          text-decoration: none;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-family: inherit;
          font-size: 0.875rem;
          font-weight: 400;
        }

        .ripple-button::before {
          content: '';
          position: absolute;
          top: var(--ripple-y, 50%);
          left: var(--ripple-x, 50%);
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background-color: ${variantStyles.rippleColor};
          border-radius: 50%;
          transition: width 0.5s ease, height 0.5s ease;
          z-index: 0;
        }

        .ripple-button:hover::before {
          width: 1000px;
          height: 1000px;
        }

        .ripple-button span {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }

        .ripple-button:hover span {
          color: ${variantStyles.hoverColor};
        }
      `}</style>
      <Component
        className={`ripple-button ${className}`}
        onClick={onClick}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          '--ripple-x': rippleStyle ? `${rippleStyle.x}px` : '50%',
          '--ripple-y': rippleStyle ? `${rippleStyle.y}px` : '50%',
        } as React.CSSProperties}
      >
        <span>
          {children}
        </span>
      </Component>
    </>
  )
}
