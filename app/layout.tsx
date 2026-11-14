import type { Metadata } from 'next'
import { profile } from '@/content/profile'
import './globals.css'

const shareImage = new URL('/share-card.png', profile.siteUrl)
const pageTitle = `${profile.name} — ${profile.title}`

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: pageTitle,
  description: profile.seoDescription,
  alternates: {
    canonical: profile.siteUrl,
  },
  openGraph: {
    type: 'website',
    url: profile.siteUrl,
    siteName: profile.name,
    title: pageTitle,
    description: profile.seoDescription,
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: profile.shareImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: profile.seoDescription,
    images: [shareImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.seoDescription,
    url: profile.siteUrl,
    image: shareImage.toString(),
    email: `mailto:${profile.email}`,
    sameAs: [profile.links.github, profile.links.linkedin],
  }

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
