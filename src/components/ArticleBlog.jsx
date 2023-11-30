import "../components/style/ArticleBlog.css";
import { Link } from "react-router-dom";


const ArticleBlog = ({ Id, title, image, desc, data, profile,fullname, views, likes,comments }) => {
  // Function to format a date string using the user's locale
  const formatYear = (dateString) => {
    const options = {
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDay = (dateString) => {
    const options = {
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formatMonth = (dateString) => {
    const options = {
      month: "long",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div className="post">
        <div className="post-img">
          <img src={image} alt="" />
        </div>
        <div className="topper">
          <div className="topper-content">
            <div className="one">
              <span className="day">{formatDay(data)}</span>
            </div>
            <div className="two">
              <p class="yr">{formatYear(data)}</p>
              <p class="mos">{formatMonth(data)}</p>
            </div>
          </div>
        </div>
        <div className="post-body">
          <Link to={`/BlogSingle/${Id}`}>
            {" "}
            <div className="post-title">
              <h1>{title}</h1>
            </div>
          </Link>
          <div
            className="post-desc"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></div>
          <div className="postedby">
            
            <img src={profile} id="profile" />
            
              <h3 id="fullname">{fullname}</h3>
  
          </div>
          <div className="likeviewcomments">
          
          <div className="view-icon-container">
              <div className="notification-icon">
              <iconify-icon icon="feather:eye" id="myicons"></iconify-icon>
              </div>
              <div className="view-counter">{views}</div>
            </div>
          
          <div className="like-icon-container">
              <div className="notification-icon">
              <iconify-icon icon="mdi:heart" id="myicons"></iconify-icon>
              </div>
              <div className="like-counter">{likes}</div>
            </div>
          
         <div className="mean-icon-container">
              <div className="notification-icon">
                <iconify-icon icon="ant-design:comment-outlined"></iconify-icon>
              </div>
              <div className="mean-counter">{comments}</div>
            </div>
          </div>
          <div className="post-footer">
            <div>
              <iconify-icon icon="eva:arrow-forward-fill"></iconify-icon>
            </div>
            <div>
              <Link to={`/BlogSingle/${Id}`}>
                <p id="readmoree">Read more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArticleBlog;
