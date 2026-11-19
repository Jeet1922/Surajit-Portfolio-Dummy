export const siteUrl = "https://jeet1922.github.io/Surajit-Portfolio/"

const parsedSiteUrl = new URL(siteUrl)

export const basePath = parsedSiteUrl.pathname.replace(/\/$/, "")
export const siteOrigin = parsedSiteUrl.origin
