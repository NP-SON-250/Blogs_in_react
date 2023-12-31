import "../components/style/postpage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function Post() {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  // ================== success message ============
  const success = () => {
    toast.success("Post has deleted", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // ============== fetching data =============
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/get/all"
    );
    const data = response.data.data;
    setData(data);
  };
  
  useEffect(() => {
    getData();
  }, []);

  // ================== delete function =====================
  async function handleDelete(id) {
    const token = localStorage.getItem("token");
    const conf = window.confirm("Do you want to delete this post");
    if (conf) {
      try {
        const response = await axios.delete(
          `https://sandrahermajesty.onrender.com/PostgreSQL/API/posts/delete/${id}`,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        success();
        getData();
      } catch (err) {
        console.error(err);
      }
    }
  }
  // Function to format a date string using the user's locale
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="post-section container-section">
        <div className="manage-posts-container">
          <div className="manage-posts">
            <div className="title-container">
              <div>
                <h1 className="title">Manage All Posts</h1>
              </div>
              <div className="search-form">
                <input type="text" placeholder="search..." />
                <button className="user-search-btn">
                  <iconify-icon icon="ion:search-outline"></iconify-icon>
                </button>
              </div>
            </div>
            <table id="customers">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Post Image</th>
                  <th>Post Title</th>
                  <th>Post Content</th>
                  <th colSpan={2}>Action</th>
                  <th>Views</th>
                  <th>Created on</th>
                </tr>
              </thead>
              <tbody>
                {data.map((post, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="t-image">
                        <img src={post.postImage} alt="Photo" />
                      </td>
                      <td className="t-title">
                        <h4>{post.postTitle}</h4>
                      </td>
                      <td className="t-desc">
                        <p dangerouslySetInnerHTML={{ __html: post.postContent }} />
                      </td>
                      <td>
                        <div className="action-icon edit">
                          <Link to={`/editpost/${post.id}`}>
                            <iconify-icon icon="mingcute:edit-line"></iconify-icon>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div
                          className="action-icon delete"
                          onClick={(e) => handleDelete(post.id)
                         }
                        >
                          <iconify-icon icon="ion:trash-outline"></iconify-icon>
                        </div>
                      </td>
                      <td>
                        <div className="views-container">
                          <div className="action-icon views">
                            <iconify-icon icon="raphael:view"></iconify-icon>
                          </div>
                          <div className="views-label">{post.views}</div>
                        </div>
                      </td>
                      <td>{formatDate(post.createdAt)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {openModalUpdate && <UpdatePost closeModal={setOpenModalUpdate} />}
      </div>
      <ToastContainer />
    </>
  );
}
