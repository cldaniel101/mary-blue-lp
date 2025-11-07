type FbqFunction = (...args: unknown[]) => void

declare global {
  interface Window {
    fbq?: FbqFunction
    _fbq?: FbqFunction
  }
}

const getFbq = (): FbqFunction | undefined => {
  if (typeof window === 'undefined') return undefined
  return window.fbq ?? window._fbq
}

export const trackLeadEvent = () => {
  const fbq = getFbq()
  if (typeof fbq === 'function') {
    fbq('track', 'Lead')
  }
}

export {}

