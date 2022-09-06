import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
// styles
import * as styles from "./styles.module.scss"

const PageIntroduction = ({ data }) => {
  const avatarImage = data?.avatarImage?.avatarImage?.gatsbyImage

  return (
    <div className={styles.introduction}>
      {data?.content === null ? null : (
        <div className={styles.introductionWrapper}>
          {data?.title && data?.title !== "About" ? (
            <>{parse(`${data?.content}`)}</>
          ) : (
            <div className={styles.avatar}>
              <GatsbyImage
                className={styles.avatarImage}
                image={avatarImage}
                alt={data?.title}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PageIntroduction
