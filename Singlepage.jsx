import { useState } from "react";
import Navbar from "../component/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function Singlepage() {
  const data = useParams();
  const [Blog, SetBlogs] = useState({});
  async function fetchSinglepage() {
    const response = await axios.get("https://687d0668918b64224330c8f8.mockapi.io/Blogs/" + data.id);
    console.log(response.data);
    if (response.status == 200) {
      SetBlogs(response.data);
    } else {
      alert("Error Aayo hai!");
    }
  }
  useEffect(() => {
    fetchSinglepage();
  }, []);
  const navigate = useNavigate();
  async function deleteBlog() {
    const response = await axios.delete("https://687d0668918b64224330c8f8.mockapi.io/Blogs/" + data.id);
    console.log(response.data);
    if (response.status == 200) {
      navigate("/");
    } else {
      alert("something went wrong");
    }
  }
  return (
    <>
      <Navbar />
      <div>
        <img src={Blog.image} alt="" />
        <h1>{Blog.title}</h1>
        <h1>{Blog.subtitle}</h1>
        <h1>{Blog.description}</h1>
        <button  onClick={deleteBlog} className="bg-red-600 text-white">
          Delete me
        </button>
      </div>
    </>
  );
}
export default Singlepage;