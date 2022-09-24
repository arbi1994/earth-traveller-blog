import React from "react"
// styles
import * as styles from "./styles.module.scss"
// components
import AuthorInfo from "./AuthorInfo"
import Newsletter from "../Newsletter"

const ArticleSidebar = ({ data, aboutData }) => {
  const authorName = `${data?.author?.node?.firstName?.node?.firstName} ${data?.author?.node?.firstName?.node?.lastName}`
  const aboutImage = aboutData?.avatarImage?.avatarImage?.gatsbyImage
  const aboutContent = aboutData?.authorIntroduction?.content

  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.asideInnerWrapper}>
        <AuthorInfo
          name={authorName}
          image={aboutImage}
          content={aboutContent}
        />
        <hr />
        <Newsletter />
      </div>
    </aside>
  )
}

export default ArticleSidebar
