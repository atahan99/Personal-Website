const siteConfig = {
  siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || 'Portfolio Homepage',
  siteDescription:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Personal portfolio and project showcase.',
  siteAuthor: process.env.NEXT_PUBLIC_SITE_AUTHOR || 'Portfolio Owner',
  ownerName: process.env.NEXT_PUBLIC_OWNER_NAME || 'Portfolio Owner',
  headline:
    process.env.NEXT_PUBLIC_HEADLINE ||
    'Cybersecurity Professional / Developer / Network Engineer',
  intro:
    process.env.NEXT_PUBLIC_INTRO ||
    "Hi, I'm a cybersecurity and network engineer.",
  workSummary:
    process.env.NEXT_PUBLIC_WORK_SUMMARY ||
    "I'm a cybersecurity and network engineering graduate focused on building practical projects.",
  bioOrigin:
    process.env.NEXT_PUBLIC_BIO_ORIGIN || 'From Istanbul, Turkey.',
  bioEducation:
    process.env.NEXT_PUBLIC_BIO_EDUCATION || 'Graduated from Purdue University.',
  resumeContactText:
    process.env.NEXT_PUBLIC_RESUME_CONTACT_TEXT ||
    'Resume is available on request.',
  resumeContactLinkText:
    process.env.NEXT_PUBLIC_RESUME_CONTACT_LINK_TEXT ||
    'Contact me on LinkedIn',
  resumeContactLink:
    process.env.NEXT_PUBLIC_RESUME_CONTACT_LINK ||
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    '',
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || '',
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || '',
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  profileImage:
    process.env.NEXT_PUBLIC_PROFILE_IMAGE || '/images/portrait.png',
  coverImageOne:
    process.env.NEXT_PUBLIC_COVER_IMAGE_ONE || '/images/placeholders/cover-1.jpg',
  coverImageTwo:
    process.env.NEXT_PUBLIC_COVER_IMAGE_TWO || '/images/placeholders/cover-2.jpg'
}

export default siteConfig
