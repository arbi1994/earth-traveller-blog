import React from 'react'
// styles
import * as styles from './styles.module.scss'

const Thumbnail = ({ data }) => {

  return (
    <div className={styles.thumbnail}>
      <div className={styles.thumbnailHeading}>
        <h4 className={styles.title}>{data?.title}</h4>
      </div>
      <div className={styles.thumbnailSubheading}>
        <h6 className={styles.date}>{data?.date}</h6>
        <span className={styles.divider}>|</span>
        <h6 className={styles.location}>{data?.location}</h6>
      </div>
      <img src={data?.image} alt="" />
    </div>
  )
}

export default Thumbnail