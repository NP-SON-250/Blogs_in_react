import Hero from "../components/Hero";
import BlogImg from "../Images/Blog-Image.jpg";
import ArticleBlog from "../components/ArticleBlog";
const Post = [
  {
    id: 1,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "18",
      month: "October",
      year: "2023",
    },
  },
  {
    id: 2,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "21",
      month: "November",
      year: "2023",
    },
  },
  {
    id: 3,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "20",
      month: "November",
      year: "2023",
    },
  },
  {
    id: 4,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "13",
      month: "March",
      year: "2023",
    },
  },
  {
    id: 5,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "09",
      month: "March",
      year: "2023",
    },
  },
  {
    id: 6,
    title: "All you want to know about industrial laws",
    featureImage: BlogImg,
    desc: ` A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
    date: {
      day: "01",
      month: "March",
      year: "2023",
    },
  },
];
export default function Article() {
  return (
    <>
      <Hero />
      <div className="Articles-section container">
        {Post.map((post) => (
          <ArticleBlog
            key={post.id}
            title={post.title}
            image={post.featureImage}
            desc={post.desc}
            day={post.date.day}
            month={post.date.month}
            year={post.date.year}
          />
        ))}
      </div>
    </>
  );
}
