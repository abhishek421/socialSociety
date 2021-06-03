import AddPost from './AddPost'
import NavBar from './NavBar';
import PostCard from './PostCard';
import {userPosts} from './userPosts'

function Home() {
  return (
    <div>
      <NavBar />
      <div style={{marginTop:'4.2em',paddingBottom:'4em'}}>
      {
        userPosts.map((post) => (
        <PostCard img={post.img} caption={post.caption} user={post.user} userName={post.userName} />
        ))
      }
      </div>
    </div>
    );
}

export default Home;