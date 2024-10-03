import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Dashboard.css"

export default function Dashboard() {
  // Ensure the Kanbas Navigation sidebar highlights the Dashboard link
  useEffect(() => {
    const dashboardLink = document.getElementById("wd-dashboard-link");
    if (dashboardLink) {
      dashboardLink.classList.add("bg-white", "text-danger");
    }
  }, []);

  return (
    <div id="wd-dashboard" className="container mt-4">
      {/* Dashboard Title */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Published Courses Subtitle */}
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      {/* Courses Grid */}
      <div id="wd-dashboard-courses" className="row g-4">
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-lg-4 g-4">
          {/* First Course Card */}
          <div className="wd-dashboard-course col" >
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} alt="React JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Second Course Card */}
          <div className="wd-dashboard-course col" >
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5678/Home">
                <img src="/images/nodejs.jpg" width="100%" height={160} alt="Node JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5678 Node JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Backend Development with Node
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Additional courses can be similarly added */}
          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/91011/Home">
                <img src="/images/python.jpg" width="100%" height={160} alt="Python Programming" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS91011 Python Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science with Python
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/121314/Home">
                <img src="/images/nodejs.jpg" width="100%" height={160} alt="Python Programming" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS121314 Java Development
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                  Enterprise Applications
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/151617/Home">
                <img src="/images/nodejs.jpg" width="100%" height={160} alt="Python Programming" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS151617 HTML & CSS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Web Design Fundamentals
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/212223/Home">
                <img src="/images/nodejs.jpg" width="100%" height={160} alt="Python Programming" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS212223 Django Framework
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Web Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col">
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/242526/Home">
                <img src="/images/nodejs.jpg" width="100%" height={160} alt="Python Programming" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS242526 Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Machine learning
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
