import pkg from '../../package.json';
export const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME || pkg?.prismic['repository'];
export const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`
export const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE || pkg?.prismic['locale'] || 'en-US'

// default config variables
export const EXAMPLE_PATH = 'cms-prismic'
export const CMS_NAME = 'Vercel'
export const CMS_URL = 'https://vercel.com'

// masthead banner at top of every page. same location as preview alert
export const SHOW_GITHUB_BANNER = false;

// basic site configurations and SEO
export const SITE_NAME = 'Malanna'
export const SITE_TITLE = "Malanna's Page"
export const SITE_DESCRIPTION = 'Small memorial website for Malanna.'
export const SITE_TAGLINE = "Remembering the sweetest kitty there ever was."
export const SITE_KEYWORDS = 'malanna,malanna.page,memorial,rip,nberlette,next.js,nextjs,static,ssg,vercel'
export const SITE_AUTHOR = 'Nicholas Berlette'
export const SITE_TWITTER = '@nberlette'
export const SITE_URL = 'https://malanna.page'
export const PRISMIC_URL = 'https://malanna.prismic.io'
export const GITHUB_URL = 'https://github.com/nberlette/malanna'

// footer links
export const FOOTER_LINK_EM = {
  url: 'https://n.berlette.com',
  text: 'Part of the Berlette Family'
}
export const FOOTER_LINK = {
  url: GITHUB_URL,
  text: 'Edit on GitHub'
}

// where to redirect the user once they exit preview mode
export const EXIT_PREVIEW_REDIRECT_URL = '/'

// absolute urls (implicit prefix of /public/, don't add it!) 
export const MANIFEST_URL = '/favicon/site.webmanifest'
export const BROWSERCONFIG_URL = '/favicon/browserconfig.xml'
export const RSS_URL = '/feed.xml'

// default favicon asset
export const FAVICON_URL = '/favicon/favicon.ico'

// experimental & unstable favicon svg glyph (base64 data-uri)
export const FAVICON_SVG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz1odHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyB2aWV3Qm94PTAgMCAyNSAyNSBzaGFwZS1yZW5kZXJpbmc9Z2VvbWV0cmljUHJlY2lzaW9uPjxkZWZzPjxzdHlsZT5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspe3BhdGh7ZmlsbDojZmZmfX08L3N0eWxlPjwvZGVmcz48cGF0aCBkPU0yNSA1LjNjMC0uNy0uMS00LjItMS4yLTUuMi0uMS0uMS0uMi0uMS0uNC0uMS0xLjMuMy0yLjMgMS4xLTIuOSAyLjItMS4zLS43LTIuOC0uNy00LjEgMC0uNi0xLjEtMS42LTItMi45LTIuMi0uMSAwLS4zIDAtLjQuMS0xLjEgMS0xLjIgNC41LTEuMiA1LjIgMCAxLjguNyAzLjYgMi4xIDQuOC0uNC0uMi0uOC0uNC0xLjEtLjctMS40LTEtMy4yLTEuNS01LTEuNC0yLjEgMC00LjIuOS01LjYgMi40Qy43IDEyLS4xIDE0LjEgMCAxNi4zYy4yIDIuNyAxLjQgNS4xIDMuNSA2LjhDNC45IDI0LjMgNi42IDI1IDguNCAyNWMuNCAwIC43IDAgMS4xLS4xIDEtLjIgMi0uNSAzLS45IDEuNC0uNiAzLTEgNC42LTF2LTFjLTEuNyAwLTMuNC40LTQuOSAxLjEtLjkuNC0xLjkuNy0yLjguOS0xLjkuMy0zLjgtLjMtNS4yLTEuNi0xLjItLjktMi0yLjEtMi42LTMuNGgxNy43YzEuOS4xIDMuNS0xLjMgMy42LTMuMVYxMEMyNC4zIDguOCAyNSA3LjEgMjUgNS4zem0tMTIgMGMtLjEtMS40LjItMi45LjctNC4yIDEgLjQgMS44IDEuMSAyLjEgMi4xLjEuMy40LjQuNy4zLjEgMCAuMS0uMS4yLS4xLjUtLjQgMS4yLS43IDEuOS0uNi43IDAgMS40LjIgMS45LjYuMi4yLjUuMi43IDAgMCAwIC4xLS4xLjEtLjIuNC0xIDEuMS0xLjggMi4xLTIuMS41IDEuNC43IDIuOC43IDQuMiAwIDMtMi41IDUuNS01LjUgNS41UzEzIDguMyAxMyA1LjN6bTkgMTAuM2MwIDEuMy0xLjEgMi40LTIuNSAyLjRoLTEuOWMuOS0uNyAxLjQtMS44IDEuNC0yLjloLTFjMCAxLjYtMS4zIDIuOS0yLjkgMi45SDEydi0xYzAtMS4xLS45LTItMi0ySDh2LS41QzggMTMuMSA2LjkgMTIgNS41IDEyaC0xdjFoMWMuOCAwIDEuNS43IDEuNSAxLjV2MWMwIC4zLjIuNS41LjVIMTBjLjYgMCAxIC40IDEgMXYxSDEuM2MtLjItLjYtLjMtMS4xLS4zLTEuNy0uMS0xLjkuNi0zLjggMi01LjJDNC4zIDkuOCA2IDkgNy45IDljMS42LS4xIDMuMi4zIDQuNSAxLjMgMS4yLjggMi41IDEuNiA2LjEgMS42IDEuMiAwIDIuNS0uMyAzLjUtMXY0Ljd6bS00LjktNy45TDE4LjMgOWMuMSAwIC4zIDAgLjQtLjFsMS4yLTEuMmMuMi0uMi4xLS43LS4yLS43aC0yLjNjLS40IDAtLjUuNC0uMy43em0tLjYtMy4yYy42IDAgMSAuNCAxIDFzLS40IDEtMSAxLTEtLjQtMS0xIC40LTEgMS0xem00IDBjLjYgMCAxIC40IDEgMXMtLjQgMS0xIDEtMS0uNC0xLTEgLjQtMSAxLTF6IGZpbGw9IzEyMyBmaWxsLXJ1bGU9ZXZlbm9kZC8+PC9zdmc+Cg=='

// theme-color and background-color for manifest + meta tags
export const THEME_COLOR = '#000000'
export const BG_COLOR = '#ffffff'

// default social images (opengraph / twitter)

// dark background
export const OG_IMAGE_URL_DARK = 'https://og-image.vercel.app/%3Ccode%3E**malanna.page**%3C%2Fcode%3E%3Cstyle%3Ecode%7Bcolor%3A%23ff3e00%3Btext-shadow%3A0%200.1em%200%20%2300000022%3B%7Dsvg,img%7Bfilter%3Adrop-shadow%280%200.1em%200%20%2300000022%29%3B%7D%20img%3Afirst-child%2C.plus%2Ccode%3A%3Abefore%2Ccode%3A%3Aafter%7Bdisplay%3Anone%3B%7Dhtml%2Cbody%7Bbackground%3A%23123%20linear-gradient%2840deg%2C%20%23123%200%25%2C%20%23ff3e0033%20150%25%29%7D%3C%2Fstyle%3E.png?md=1&images=https%3A%2F%2Fassets.vercel.com&widths=0&heights=0&images=https%3A%2F%2Ficns.imgix.net%2Fcat.svg&heights=500&fontSize=150px&theme=dark'

// light background
export const OG_IMAGE_URL_LIGHT = 'https://og-image.vercel.app/%3Ccode%3E**malanna.page**%3C%2Fcode%3E%3Cstyle%3Ecode%7Bcolor%3A%23ff3e00%3Btext-shadow%3A0%200.1em%200%20%2300000022%3B%7Dsvg,img%7Bfilter%3Adrop-shadow%280%200.1em%200%20%2300000022%29%3B%7D%20img%3Afirst-child%2C.plus%2Ccode%3A%3Abefore%2Ccode%3A%3Aafter%7Bdisplay%3Anone%3B%7Dhtml%2Cbody%7Bbackground%3A%23f4f4f4%20linear-gradient%2840deg%2C%20%23f4f4f4%200%25%2C%20%23ff3e0033%20150%25%29%7D%3C%2Fstyle%3E.png?md=1&images=https%3A%2F%2Fassets.vercel.com&widths=0&heights=0&images=https%3A%2F%2Ficns.imgix.net%2Fcat.svg&heights=500&fontSize=150px&theme=light'

// alternate
export const OG_IMAGE_URL_ALT = 'https://og-image.vercel.app/%23%23%23%20%3Ccode%3E**Malanna.page**%3C%2Fcode%3E%3Cstyle%3Ecode%7Bcolor%3A%23234%3Btext-shadow%3A0%200.1em%200%20%2300000022%3B%7Dsvg,img%7Bfilter%3Adrop-shadow%280%200.1em%200%20%2300000022%29%3B%7D%20img%3Afirst-child%2C.plus%2Ccode%3A%3Abefore%2Ccode%3A%3Aafter%7Bdisplay%3Anone%3B%7Dhtml%2Cbody%7Bbackground%3A%23f4f4f4%20linear-gradient%2840deg%2C%20%23f4f4f4%200%25%2C%20%23ff3e0033%20150%25%29%7D%3C%2Fstyle%3E.png?md=1&images=https%3A%2F%2Fassets.vercel.com&images=https%3A%2F%2Fgit.io%2fJXDrN&heights=0&heights=500&fontSize=150px&theme=light'
