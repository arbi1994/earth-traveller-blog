import React from "react"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const PageContent = ({ data }) => {
  const avatarImage = data?.avatarImage?.avatarImage?.gatsbyImage

  return (
    <section className={styles.content}>
      <div className={styles.contentIntroduction}>
        {data?.title && data?.title !== "About" ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam
          </p>
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
      <main className={styles.contentMain}>
        {parse(`<p>${data.content}</p>`)}
      </main>
    </section>
  )
}

export default PageContent
