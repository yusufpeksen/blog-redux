import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectAllPosts } from "./postSlice"


const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const renderPosts = posts.map(post => (
        <article className="bg-[#393E46] rounded-[10px] p-[30px] my-[25px]" key={post.id}>
            <h3 className="text-center text-[#EEEEEE] text-[30px]">{post.title}</h3>
            <p className="mt-[15px] text-[#EEEEEE]">{post.content}</p>
            <p className="text-[#EEEEEE] text-[8px] mt-[10px]">post id : {post.id}</p>
        </article>
    ))

    return (
        <section>
            {renderPosts}
        </section>
    )
}


export default PostsList