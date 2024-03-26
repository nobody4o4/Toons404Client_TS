import GetUserRole from "@/Services/user/getUserRole.services";
import { Navigate } from "react-router-dom";

function DashBoard() {
  return (
    <div>
      <div className="m-10 mx-auto grid max-w-screen-lg gap-5 sm:grid-cols-3">
        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 rounded-xl bg-blue-50 p-4 text-blue-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="mt-4 font-medium">Sessions</p>
          <p className="mt-2 text-xl font-medium">
            23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span className="text-xs text-gray-400">+4.9%</span>
        </div>
        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 rounded-xl bg-rose-50 p-4 text-rose-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="mt-4 font-medium">Users</p>
          <p className="mt-2 text-xl font-medium">
            23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span className="text-xs text-gray-400">+4.9%</span>
        </div>
        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 rounded-xl bg-green-50 p-4 text-green-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="mt-4 font-medium">Revenue</p>
          <p className="mt-2 text-xl font-medium">
            $23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span className="text-xs text-gray-400">+4.9%</span>
        </div>
      </div>
      <div className="m-10 mx-auto grid max-w-screen-lg  gap-5 sm:grid-cols-3">
        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 rounded-xl bg-blue-400 p-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="mt-4 font-medium">Sessions</p>
          <p className="mt-2 text-xl font-medium">
            23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span className="text-xs text-gray-400">+4.9%</span>
        </div>
        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 rounded-xl bg-rose-400 p-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="mt-4 font-medium">Users</p>
          <p className="mt-2 text-xl font-medium">
            23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span className="text-xs text-gray-400">+4.9%</span>
        </div>
        <div className="px-4 py-6 shadow-lg shadow-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 rounded-xl bg-green-400 p-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="mt-4 font-medium">Revenue</p>
          <p className="mt-2 text-xl font-medium">
            $23.4k
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
          <span className="text-xs text-gray-400">+4.9%</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 bg-gray-100 p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Insights</p>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Your views are up 400% since last month</p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Your blog got featured on awwwards.com</p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam deserunt cupiditate ipsa.
            </p>
          </div>
          <div className="mt-4 flex items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Activity</p>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
              alt="Simon Lewis"
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Albert Mcalister</strong>
              <span className="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="/images/fR71TFZIDTv2jhvKsOMhC.png"
              alt=""
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Samantha Ribbon</strong>
              <span className="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
          <div className="flex items-center py-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="/images/R-Wx_NHvZBci3KLrgXhp1.png"
              alt=""
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Dr. Kayla</strong>
              <span className="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a className="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p className="text-lg font-medium">Traffic Sources</p>
          <div className="mt-4">
            <p className="float-left mb-2">Direct</p>
            <span className="float-right mb-2">20,00</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-10/12 overflow-hidden rounded-full bg-indigo-600"></div>
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Referral</p>
            <span className="float-right mb-2">2,000</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-4/12 overflow-hidden rounded-full bg-indigo-600"></div>
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Google</p>
            <span className="float-right mb-2">1,500</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-3/12 overflow-hidden rounded-full bg-indigo-600"></div>
            </div>
          </div>
          <div className="mt-4">
            <p className="float-left mb-2">Facebook</p>
            <span className="float-right mb-2">260</span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-1/12 overflow-hidden rounded-full bg-indigo-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
