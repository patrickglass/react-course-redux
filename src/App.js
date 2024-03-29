import "./App.css";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { NavLink, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import profile from "./profile.jpeg";

function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  const activeStyle = { color: "red" };
  return (
    <div className="bg-white dark:bg-gray-800">
      <nav className="">
        <a className="navbar-brand" href="/">
          Coursy
        </a>{" "}
        |{" "}
        <NavLink to="/" activeStyle={activeStyle} className="nav-link">
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
          Abouts
        </NavLink>
      </nav>
      <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
          <div className="flex p-6 bg-gray-100 dark:bg-gray-800">
            <div className="p-6 max-w-sm mx-auto dark:bg-gray-100 bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
              </div>
              <div>
                <div className="text-xl font-medium text-black dark:text-gray-100 ">
                  ChitChat
                </div>
                <p className="dark:text-gray-500 text-gray-900">
                  You have a new message!
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-6">
            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
              <img
                className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={profile}
                alt=""
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-semibold">
                    “Tailwind CSS is the only framework that I've seen scale on
                    large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-cyan-600">Sarah Dayan</div>
                  <div className="text-gray-500">Staff Engineer, Algolia</div>
                </figcaption>
              </div>
            </figure>
          </div>
          <div className="flex">
            <div className="bg-white dark:bg-gray-800 rounded-tl-xl sm:rounded-t-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
              <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                <img
                  src={profile}
                  alt=""
                  width="160"
                  height="160"
                  className="flex-none w-20 h-20 rounded-lg bg-gray-100"
                />
                <div className="min-w-0 flex-auto space-y-0.5">
                  <p className="text-lime-600 dark:text-lime-400 text-sm sm:text-base lg:text-sm xl:text-base font-semibold uppercase">
                    <abbr title="Episode">Ep.</abbr> 128
                  </p>
                  <h2 className="text-black dark:text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
                    Scaling CSS at Heroku with Utility Classes
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg font-medium">
                    Full Stack Radio
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-200 dark:bg-black rounded-full overflow-hidden">
                  <div
                    className="bg-lime-500 dark:bg-lime-400 w-1/2 h-1.5"
                    role="progressbar"
                    aria-valuenow="1456"
                    aria-valuemin="0"
                    aria-valuemax="4550"
                  ></div>
                </div>
                <div className="text-gray-500 dark:text-gray-400 flex justify-between text-sm font-medium tabular-nums">
                  <div>24:16</div>
                  <div>75:50</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white lg:rounded-b-xl py-4 px-1 sm:px-3 lg:px-1 xl:px-3 grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7 items-center">
              <button type="button" className="mx-auto">
                <svg width="24" height="24" fill="none">
                  <path
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden sm:block lg:hidden xl:block mx-auto"
              >
                <svg width="17" height="18">
                  <path
                    d="M0 0h2v18H0V0zM4 9l13-9v18L4 9z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button type="button" className="mx-auto">
                <svg width="34" height="39" fill="none">
                  <path
                    d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z"
                    fill="currentColor"
                  />
                  <path
                    d="M1 22c0 8.837 7.163 16 16 16s16-7.163 16-16S25.837 6 17 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M17 0L9 6l8 6V0z" fill="currentColor" />
                </svg>
              </button>
              <button type="button" className="mx-auto">
                <svg width="50" height="50" fill="none">
                  <circle
                    className="text-gray-300 dark:text-gray-500"
                    cx="25"
                    cy="25"
                    r="24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M18 16h4v18h-4V16zM28 16h4v18h-4z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button type="button" className="mx-auto">
                <svg width="34" height="39" fill="none">
                  <path
                    d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z"
                    fill="currentColor"
                  />
                  <path
                    d="M33 22c0 8.837-7.163 16-16 16S1 30.837 1 22 8.163 6 17 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M17 0l8 6-8 6V0z" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                className="hidden sm:block lg:hidden xl:block mx-auto"
              >
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                  <path d="M17 0H15V18H17V0Z" fill="currentColor" />
                  <path d="M13 9L0 0V18L13 9Z" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-500 dark:border-gray-600 dark:text-gray-400"
              >
                1.0x
              </button>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
