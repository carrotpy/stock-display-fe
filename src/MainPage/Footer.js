function FooterBar() {
  return (
    // <html class="dark">
    <footer class="bg-white">
      <div class="w-full  mx-auto  p-7 flex  items-center justify-around  bottom-0 dark:bg-slate-800">
        {/* <ul class="flex  mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"> */}
        <div>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" class="hover:underline">
              Aravind Eeswar Ceramics™
            </a>
          </span>
        </div>
        <div class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          All Rights Reserved.
        </div>

        {/* </ul> */}

        {/* <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 .flex {
    display: flex;
    justify-content: space-around;
}sm:mt-0">
          <div>
            <a href="#" class="hover:underline me-4 md:me-6">
              About
            </a>
          </div>
          <div>
            <a href="#" class="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </div>
          <div>
            <a href="#" class="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </div>
          <div>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </div>
        </ul> */}
      </div>
    </footer>
    // </html>
  );
}
export default FooterBar;
