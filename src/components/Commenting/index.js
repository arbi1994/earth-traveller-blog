import React, { useEffect } from "react"
import commentBox from "commentbox.io"

const Commenting = () => {
  useEffect(() => {
    commentBox("5649514660626432-proj")
  }, [])

  return (
    <div>
      <div className="commentbox" />
    </div>
  )
}

export default Commenting
