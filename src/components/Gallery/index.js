import React, { useState, useEffect } from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"
// hooks
import useWindowSize from "../../hooks/useWindowSize"

const Gallery = ({ data }) => {
  const [width, height] = useWindowSize()
  const [columns, setColumns] = useState(3)

  const breakpoints = {
    tablet: "768",
    phone: "425",
  }

  useEffect(() => {
    setColumns(3)
    if (width < breakpoints.tablet) setColumns(2)
    if (width <= breakpoints.phone) setColumns(1)
  }, [width])

  return (
    <div className={styles.gallery}>
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        variant="masonry"
        cols={columns}
      >
        {data?.map(({ node }) => (
          <ImageListItem key={node?.id}>
            <GatsbyImage
              image={node?.featuredImage?.node?.gatsbyImage}
              alt={node?.featuredImage?.node?.filename}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default Gallery
