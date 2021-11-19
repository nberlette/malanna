// default config variables from original vercel demo
export const EXAMPLE_PATH = 'cms-prismic'
export const CMS_NAME = 'Vercel'
export const CMS_URL = 'https://vercel.com'

// basic site configurations and SEO
export const SITE_NAME = 'Malanna'
export const SITE_TITLE = "Malanna's Page"
export const SITE_DESCRIPTION = 'Small memorial website for Malanna, the sweetest kitty there ever was. Statically generated with Next.js.'
export const SITE_TAGLINE = "Remembering the sweetest kitty there ever was."
export const SITE_KEYWORDS = 'malanna,malanna.page,memorial,rip,nberlette,next.js,nextjs,static,ssg,vercel'
export const SITE_AUTHOR = 'Nicholas Berlette'
export const SITE_TWITTER = '@nberlette'
export const SITE_URL = 'https://malanna.page'
export const PRISMIC_URL = 'https://malanna.prismic.io'
export const GITHUB_URL = 'https://github.com/nberlette/malanna'

// where to redirect the user once they exit preview mode
export const EXIT_PREVIEW_REDIRECT_URL = '/'

// absolute urls (implicit prefix of /public/, don't add it!) 
export const MANIFEST_URL = '/favicon/site.webmanifest'
export const BROWSERCONFIG_URL = '/favicon/browserconfig.xml'
export const RSS_URL = '/feed.xml'

// default favicon asset
export const FAVICON_URL = '/favicon/favicon.ico'

// experimental & unstable favicon svg glyph (base64 data-uri)
export const FAVICON_SVG = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNSAyNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUgMjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDk0QjRDO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1LDUuM2MwLTAuNy0wLjEtNC4yLTEuMi01LjJDMjMuNywwLDIzLjYsMCwyMy40LDBjLTEuMywwLjMtMi4zLDEuMS0yLjksMi4yYy0xLjMtMC43LTIuOC0wLjctNC4xLDAKCWMtMC42LTEuMS0xLjYtMi0yLjktMi4yYy0wLjEsMC0wLjMsMC0wLjQsMC4xYy0xLjEsMS0xLjIsNC41LTEuMiw1LjJjMCwxLjgsMC43LDMuNiwyLjEsNC44Yy0wLjQtMC4yLTAuOC0wLjQtMS4xLTAuNwoJQzExLjUsOC40LDkuNyw3LjksNy45LDhjLTIuMSwwLTQuMiwwLjktNS42LDIuNEMwLjcsMTItMC4xLDE0LjEsMCwxNi4zYzAuMiwyLjcsMS40LDUuMSwzLjUsNi44QzQuOSwyNC4zLDYuNiwyNSw4LjQsMjUKCWMwLjQsMCwwLjcsMCwxLjEtMC4xYzEtMC4yLDItMC41LDMtMC45YzEuNC0wLjYsMy0xLDQuNi0xdi0xYy0xLjcsMC0zLjQsMC40LTQuOSwxLjFjLTAuOSwwLjQtMS45LDAuNy0yLjgsMC45CgljLTEuOSwwLjMtMy44LTAuMy01LjItMS42QzMsMjEuNSwyLjIsMjAuMywxLjYsMTloMTcuN2MxLjksMC4xLDMuNS0xLjMsMy42LTMuMWMwLTAuMSwwLTAuMSwwLTAuMlYxMEMyNC4zLDguOCwyNSw3LjEsMjUsNS4zegoJIE0xMyw1LjNjLTAuMS0xLjQsMC4yLTIuOSwwLjctNC4yYzEsMC40LDEuOCwxLjEsMi4xLDIuMWMwLjEsMC4zLDAuNCwwLjQsMC43LDAuM2MwLjEsMCwwLjEtMC4xLDAuMi0wLjFjMC41LTAuNCwxLjItMC43LDEuOS0wLjYKCWMwLjcsMCwxLjQsMC4yLDEuOSwwLjZjMC4yLDAuMiwwLjUsMC4yLDAuNywwYzAsMCwwLjEtMC4xLDAuMS0wLjJjMC40LTEsMS4xLTEuOCwyLjEtMi4xYzAuNSwxLjQsMC43LDIuOCwwLjcsNC4yCgljMCwzLTIuNSw1LjUtNS41LDUuNVMxMyw4LjMsMTMsNS4zeiBNMjIsMTUuNmMwLDEuMy0xLjEsMi40LTIuNSwyLjRjLTAuMSwwLTAuMSwwLTAuMiwwaC0xLjdjMC45LTAuNywxLjQtMS44LDEuNC0yLjloLTEKCWMwLDEuNi0xLjMsMi45LTIuOSwyLjlIMTJ2LTFjMC0xLjEtMC45LTItMi0ySDh2LTAuNUM4LDEzLjEsNi45LDEyLDUuNSwxMmgtMXYxaDFDNi4zLDEzLDcsMTMuNyw3LDE0LjV2MUM3LDE1LjgsNy4yLDE2LDcuNSwxNkgxMAoJYzAuNiwwLDEsMC40LDEsMXYxSDEuM0MxLjEsMTcuNCwxLDE2LjksMSwxNi4zYy0wLjEtMS45LDAuNi0zLjgsMi01LjJDNC4zLDkuOCw2LDksNy45LDljMS42LTAuMSwzLjIsMC4zLDQuNSwxLjMKCWMxLjIsMC44LDIuNSwxLjYsNi4xLDEuNmwwLDBjMS4yLDAsMi41LTAuMywzLjUtMVYxNS42eiBNMTcuMSw3LjdsMS4yLDEuM0MxOC40LDksMTguNiw5LDE4LjcsOC45bDEuMi0xLjJDMjAuMSw3LjUsMjAsNywxOS43LDcKCWgtMi4zQzE3LDcsMTYuOSw3LjQsMTcuMSw3Ljd6IE0xNi41LDQuNWMwLjYsMCwxLDAuNCwxLDFzLTAuNCwxLTEsMWMtMC42LDAtMS0wLjQtMS0xUzE1LjksNC41LDE2LjUsNC41eiBNMjAuNSw0LjUKCWMwLjYsMCwxLDAuNCwxLDFzLTAuNCwxLTEsMXMtMS0wLjQtMS0xUzE5LjksNC41LDIwLjUsNC41eiIvPgo8L3N2Zz4K'

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
