import "../components/style/Singleblog.css";
export const Singleblog = ({ title, Image, category, date, time, statu }) => {
  return (
    <>
      <div className="blog">
        <div className="blog-img">
          <img src={Image} alt="" />
        </div>
        <div className="blog-content">
          <div className="blog-category">
            <p>{category}</p>
          </div>
          <div className="blog-title">
            <h1>{title}</h1>
          </div>
          <div className="blog-social-icon">
            <div className="social-icons">
              <div className="twitter">
                <a href="#">
                  <span>
                    <iconify-icon icon="ri:twitter-fill"></iconify-icon>
                  </span>
                </a>
              </div>
              <div className="facebook">
                <a href="#">
                  <span>
                    <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                  </span>
                </a>
              </div>
              <div className="instagram">
                <a href="#">
                  <span>
                    <iconify-icon icon="bi:instagram"></iconify-icon>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="blog-date">
            <p>
              <span>{date} </span>|
              <span>
                {" "}
                {time} {statu}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
