import Link from 'next/link'
import React from 'react'

// This is a wrapper around Next.js Link component that adds legacyBehavior by default
// to avoid hydration errors with nested anchor tags
const CustomLink = ({ href, children, ...props }) => {
  // If the link is external, use a regular anchor tag
  if (href && (href.startsWith('http') || href.startsWith('mailto:'))) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  // Otherwise, use Next.js Link with legacyBehavior
  return (
    <Link href={href} legacyBehavior passHref {...props}>
      {children}
    </Link>
  )
}

export default CustomLink 