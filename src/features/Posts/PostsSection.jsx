import authorOne from "../../assets/05(2).jpg";
import authorTwo from "../../assets/12.jpg";
import photoOne from "../../assets/nature.jpg";
import photoTwo from "../../assets/rohan-solankurkar-eBvd7xny6RQ-unsplash.jpg";
import PostCard from "./PostCard";

const postsData = [
  {
    postId: 1,
    author: "Alice Doe",
    authorPhoto: authorOne,
    timestamp: "2023-12-21T10:30:00Z", // Sample timestamp
    title: "Exciting Questions on Fractions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue velit, a tincidunt turpis. Maecenas nec enim finibus...",
    image: photoOne,
    likeCount: 12,
    commentCount: 5,
  },
  {
    postId: 2,
    author: "Jane Doe",
    authorPhoto: authorTwo,
    timestamp: "2023-12-21T10:30:00Z", // Sample timestamp
    title: "Exciting Questions on Fractions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue velit, a tincidunt turpis. Maecenas nec enim finibus...",
    image: photoTwo,
    likeCount: 12,
    commentCount: 5,
  },
];

export default function PostsSection() {
  return (
    <div>
      {postsData.map((post) => (
        <PostCard key={post.postId} postData={post} />
      ))}
    </div>
  );
}
