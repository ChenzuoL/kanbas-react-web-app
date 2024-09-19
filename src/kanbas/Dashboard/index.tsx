import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5678/Home">
            <img src="/images/nodejs.jpg" width={200} />
            <div>
              <h5>
                CS5678 Node JS
              </h5>
              <p className="wd-dashboard-course-title">
                Backend Development with Node
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/591011/Home">
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5>
                CS91011 Python Programming
              </h5>
              <p className="wd-dashboard-course-title">
                Data Science with Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/121314/Home">
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5>
                CS121314 Java Development
              </h5>
              <p className="wd-dashboard-course-title">
                Enterprise Applications with Java
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/151617/Home">
            <img src="/images/html.jpg" width={200} />
            <div>
              <h5>
                CS151617 HTML & CSS
              </h5>
              <p className="wd-dashboard-course-title">
                Web Design Fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/212223/Home">
            <img src="/images/django.jpg" width={200} />
            <div>
              <h5>
                CS212223 Django Framework
              </h5>
              <p className="wd-dashboard-course-title">
                Web Development with Django
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}
