export const siteUrl = "https://jeet1922.github.io/Surajit-Portfolio-Dummy/"

const parsedSiteUrl = new URL(siteUrl)

export const basePath = parsedSiteUrl.pathname.replace(/\/$/, "")
export const siteOrigin = parsedSiteUrl.origin
