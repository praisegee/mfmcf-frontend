import "./blog.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Blog() {
  return (
    <>
      <section className="blog" id="blog">
        <div className="container">
          <div className="blog-box">
            <h1>
              <Skeleton width={350} baseColor="#ccc" />
            </h1>
            <div className="img">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>
                  <Skeleton
                    width={350}
                    height={200}
                    style={{ display: "inline-block" }}
                    baseColor="#ccc"
                  />
                </p>
                <p>
                  <Skeleton width={350} count={5} baseColor="#ccc" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
