import { useDispatch } from "react-redux"
import { pushPost } from "./postSlice"
import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"



const AddPostForm = () => {

    const dispatch = useDispatch()

    const [title , setTitle] = useState("")
    const [content , setContent] = useState("")

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)

    const onPushBtnClicked = () => {
        if (title && content) {
            dispatch(
                pushPost({
                    id : nanoid(),
                    title,
                    content
                })
            )

            setTitle('')
            setContent('')
        }
    }

  return (
    <section className="w-[500px]">
      <h2 className="text-center text-white text-[32px] mb-[10px]">Add a New Post</h2>
      <form className="flex flex-col bg-[#393E46] gap-2">
        <label className="text-white pl-[5px]" htmlFor="postTitle">Title : </label>
        <input onChange={onTitleChanged} value={title} className="mx-[10px]" type="text" id="postTitle"></input>
        <label className="text-white pl-[5px]" htmlFor="postContent">Content : </label>
        <textarea onChange={onContentChanged} value={content} className="mx-[10px]" id="postContent"></textarea>
        <button onClick={onPushBtnClicked} className="my-[10px] bg-[#00ADB5] w-[100px] mx-auto rounded-[15px] py-[4px] text-white" type="button">Push Post</button>
      </form>
    </section>
  )
}

export default AddPostForm
