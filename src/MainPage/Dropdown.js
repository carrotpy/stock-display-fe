import React from "react";
import { Cookies } from "react-cookie";
function Dropdown(props) {
  const cookies = new Cookies();
  return (
    <div>
      {props.isVisible ? (
        <div
          class="z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 "
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">
              {cookies.get("aeceramics_uuser") || null}
            </span>
            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
              {cookies.get("aeceramics_uemail") || null}
            </span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="/stock-display-fe/#/login"
                onClick={() => {
                  window.localStorage.removeItem("write");
                }}
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export default Dropdown;
