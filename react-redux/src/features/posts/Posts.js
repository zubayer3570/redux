import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, resetPosts} from './postsSlice';

const Posts = () => {
    let {posts, isLoading} = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=> dispatch(resetPosts())} style={{marginRight: '20px'}}>Reset Posts</button>
            <button onClick={()=> dispatch(fetchPosts())} style={{marginTop: '20px'}}>Fetch Posts</button>
            {isLoading && <h1>Loading...</h1>}
            {posts?.map(post => <p>{post.title}</p>)}
        </div>
    );
};

export default Posts;