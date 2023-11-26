function FooterBar() {
  return (
    // <html class="dark">
    <footer class="bg-white dark:bg-slate-800">
      <div class="w-full  mx-auto max-w-screen-xl p-11 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" class="hover:underline">
            Aravindh Eshwar Ceramics™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Made with{"   "}
            </span>
          </li>
          <li>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 64 64"
                aria-hidden="true"
                role="img"
                class="iconify iconify--emojione"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M61.1 18.2c-6.4-17-27.2-9.4-29.1-.9c-2.6-9-22.9-15.7-29.1.9C-4 36.7 29.6 53.3 32 56c2.4-2.2 36-19.6 29.1-37.8"
                  fill="#f5ce3e"
                ></path>
              </svg>
            </span>
          </li>

          <li>
            <a> in India</a>
          </li>
        </ul>

        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
    // </html>
  );
}
export default FooterBar;
