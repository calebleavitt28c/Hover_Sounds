import React from "react"

const PostDialog = (props) => {
  const [showDialog, setDialog] = React.useState(false)

  return (
    <div>
      { props.showDialog && (
        <dialog className="modal display-block">
          <img className="rounded-lg w-[50%]" src={props.image} alt={`img by ${props.artist}`}></img>
        </dialog>
      )}
    </div>
  )
}

export default PostDialog