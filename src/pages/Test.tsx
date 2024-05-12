import { useState } from "react";
import ForumHomePage from "./TestTest";
import InternalError from "./error/InternalError";

function Test() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Forum Title:", title);
    console.log("Forum Description:", description);
    // Reset form fields
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <InternalError />
      <ForumHomePage />
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto flex items-center justify-between px-4 py-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src="logo.png" alt="Forum Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold">My Forum</span>
            </div>
            {/* Navigation */}
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Search
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Members
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Profile
                  </a>
                </li>
              </ul>
            </nav>
            {/* User Login/Register */}
            <div>
              <button className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white">
                Login
              </button>
              <button className="rounded-md bg-green-500 px-4 py-2 text-white">
                Register
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold">Welcome to My Forum</h1>
            <p className="mb-8 text-lg">
              Join our vibrant community and engage in meaningful discussions.
            </p>
            <button className="rounded-md bg-white px-6 py-3 font-bold text-blue-500">
              Join the Discussion
            </button>
          </div>
        </section>

        {/* Forum Categories */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-3xl font-bold">Forum Categories</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Category Tile */}
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="mb-4 flex items-center">
                <img
                  src="icon.png"
                  alt="Category Icon"
                  className="mr-4 h-10 w-10"
                />
                <h3 className="text-xl font-bold">Category Name</h3>
              </div>
              <p className="mb-4 text-gray-600">
                Category description goes here.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>100 Topics</span>
                <span>500 Posts</span>
              </div>
            </div>
            {/* More Category Tiles */}
          </div>
        </section>

        {/* Latest Activity */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-3xl font-bold">Latest Activity</h2>
          {/* Recent Posts */}
          <div className="mb-8 rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-bold">Recent Posts</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Post Title 1
                </a>
                <div className="text-sm text-gray-500">
                  by John Doe - 2 hours ago
                </div>
              </li>
              {/* More Recent Posts */}
            </ul>
          </div>
          {/* Popular Topics */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-bold">Popular Topics</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Topic Title 1
                </a>
                <div className="text-sm text-gray-500">100 replies</div>
              </li>
              {/* More Popular Topics */}
            </ul>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="container mx-auto px-4 py-12">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Online Users */}
          <div className="mb-8 rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-bold">Online Users</h3>
            <div className="text-gray-600">50 users online</div>
            <ul className="mt-4 space-y-2">
              <li>User 1</li>
              <li>User 2</li>
              {/* More Online Users */}
            </ul>
          </div>
          {/* Upcoming Events */}
          <div className="mb-8 rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-bold">Upcoming Events</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-bold">Event Title 1</div>
                <div className="text-sm text-gray-500">Date: 01/01/2023</div>
              </li>
              {/* More Upcoming Events */}
            </ul>
          </div>
          {/* Advertisements */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-bold">Sponsored</h3>
            {/* Advertisement content */}
          </div>
        </aside>

        {/* Footer */}
        <footer className="bg-gray-800 py-8 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              {/* Forum Statistics */}
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-bold">Forum Statistics</h3>
                <div>Total Members: 1,000</div>
                <div>Total Topics: 500</div>
                <div>Total Posts: 5,000</div>
              </div>
              {/* Quick Links */}
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-bold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Media Icons */}
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-bold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-md">
          <form
            onSubmit={handleSubmit}
            className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Forum Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                placeholder="Enter forum title"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Forum Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                placeholder="Enter forum description"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              >
                Create Forum
              </button>
            </div>
          </form>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold">My Forum</h1>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg bg-white shadow">
              <ul className="divide-y divide-gray-200">
                <li className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="/user-avatar.jpg"
                        alt="User avatar"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-lg font-medium text-gray-900">
                        Post Title
                      </div>
                      <div className="text-sm text-gray-500">
                        Posted by John Doe
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod, nulla sit amet aliquam lacinia, nisl nisl
                      aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="inline-flex items-center text-sm text-gray-500">
                      <svg
                        className="mr-1 h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      2 hours ago
                    </span>
                    <span className="ml-4 inline-flex items-center text-sm text-gray-500">
                      <svg
                        className="mr-1 h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      10 comments
                    </span>
                  </div>
                </li>
                {/* More list items */}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-lg bg-white shadow">
              <div className="px-6 py-4">
                <h2 className="mb-4 text-xl font-bold">Sidebar</h2>
                {/* Sidebar content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Test;
