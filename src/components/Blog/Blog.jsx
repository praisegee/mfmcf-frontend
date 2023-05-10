// import React, { useState } from "react";
import "./blog.css";
import { Skeleton } from "@mui/material";

function Blog() {
  //   const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="blog" id="blog">
        <div className="container">
          <div className="blog-box flex">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={118}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
