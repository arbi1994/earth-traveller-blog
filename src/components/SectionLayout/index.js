import React from "react"
import { Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const SectionLayout = ({ props, children }) => {
  return (
    <section
      className={styles.container}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className={styles.containerWrapper}>
        <div className={styles.heading} style={{ color: props.color }}>
          <h3>{props.title}</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>{children}</div>
        </div>
        <div className={styles.discoverMoreBtn}>
          <Link className={styles.discoverLink} to={props.link}>
            Discover more
          </Link>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>
      </div>
    </section>
  )
}

export default SectionLayout
