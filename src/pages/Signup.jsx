import axios from "axios";
import "../components/style/signup.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const errors = () => {
    toast.error("Failed to create account", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [profile, setprofile] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesignup = async (e) => {
    e.preventDefault();

    const signupinfo = new FormData();
    signupinfo.append("firstName", firstName);
    signupinfo.append("lastName", lastName);
    signupinfo.append("email", email);
    signupinfo.append("password", password);

    const imageInput = document.getElementById("imageInput");
    const profile = imageInput.files[0];
    signupinfo.append("profile", profile);

    try {
      const response = await fetch(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/users/signUp",

        {
          method: "POST",
          body: signupinfo,
        }
      );
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        const responseData = await response.json();
        console.log("response", responseData);
        toast.success("User registered succesfully", {
          position: "top-center",
          autoClose: 3000,
        });
        setfirstName("");
        setlastName("");
        setemail("");
        setpassword("");
        setprofile("");
      } else if (response.status === 400) {
        console.log("Email already exists");
        toast.warning("Email Already exists", {
          position: "top-center",
          autoClose: 3000,
        });
        setfirstName("");
        setlastName("");
        setemail("");
        setpassword("");
        setprofile("");
      } else {
        console.log("User registeration failed");
        toast.error("User registeration failed", {
          position: "top-center",
        });
        setfirstName("");
        setlastName("");
        setemail("");
        setpassword("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  //======= to be removed======

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = async () => {
    try {
      const result = await axios.post(
        "https://sandrahermajesty.onrender.com/PostgreSQL/API/users/signUp",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
      );
      alert("User created successfully");
      console.log(result.data);
      navigate("/Login");
    } catch (err) {
      errors();
      console.error(err);
    }
  };
  return (
    <>
      <div className="sign-section container">
        <div className="sign-container">
          <h4>
            Vist Me Daily<span className="span"> Create</span> Account
          </h4>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
                onChange={(e) => setlastName(e.target.value)}
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
          />
          <input
                type="file"
                className="file_img"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setprofile(file);
                }}
              />
          <button onClick={handleRegister}>Create Account</button>
          <p>
            Already have account?{" "}
            <Link to="/Login">
              <span className="link">Login Here</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
