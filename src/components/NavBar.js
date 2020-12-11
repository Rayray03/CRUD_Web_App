import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink
        to="/"
        exact
        activeClassName="text-white"
        className="inflex-flex items-center py-6 px-2 mr-4 text-purple-200 hover:text-purple-300 text-4xl font-bold cursive tracking-widest"
      >
        Ray
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavLink
              to="/post"
              className="inline-flex items-center py-2 px-2 my-6 rounded text-purple-200 hover:text-purple-300"
              activeClassName="text-blue-100 bg-blue-700"
            >
              Blog Posts
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              to="/project"
              className="inline-flex items-center py-2 px-2 my-6 rounded text-purple-200 hover:text-purple-300"
              activeClassName="text-blue-100 bg-blue-700"
            >
              Projects
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              to="/about"
              className="inline-flex items-center py-2 px-2 my-6 rounded text-purple-200 hover:text-purple-300"
              activeClassName="text-blue-100 bg-blue-700"
            >
              About Me!
            </NavLink>
          </li>
        </ul>
        <span class="navbar-text">
          <SocialIcon
            url="https://www.linkedin.com/in/rayxw"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/Ray0Scythe"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/Scythe.Ray"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </span>
      </div>
    </nav>
  );
}
