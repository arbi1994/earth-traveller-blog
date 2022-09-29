import React, { useState, useEffect } from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const Gallery = ({ data }) => {
  return (
    <div className={styles.gallery}>
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        variant="masonry"
        cols={3}
      >
        {data?.map(({ node }) => (
          <ImageListItem key={node?.id}>
            <GatsbyImage
              image={node?.gatsbyImage}
              alt={node?.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default Gallery
