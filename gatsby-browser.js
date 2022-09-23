exports.shouldUpdateScroll = ({ routerProps, getSavedScrollPosition }) => {
  const { pathname } = routerProps.location
  const scrollToTopRoutes = [
    "/",
    "/gallery/",
    "/countries/",
    "/articles/",
    "/about/",
  ]

  // transform pathname string into an array so I can target each individual pathname
  const pathnameArr = pathname.split("/").slice(1, pathname.length)
  // console.log(pathnameArr)

  if (
    (pathnameArr[0] === "articles" && pathnameArr[1] > 1) ||
    pathname === "/articles"
  ) {
    window.scrollTo({ top: 900, left: 0, behavior: "smooth" })
  }

  if (
    scrollToTopRoutes.includes(pathname) ||
    (pathnameArr[0] === "countries" && pathnameArr[1] !== "") ||
    (pathnameArr[0] === "articles" && pathnameArr[1] !== "") 
  ) {
    window.scrollTo(0, 0)
  }

  return false
}


