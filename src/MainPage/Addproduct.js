import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FooterBar from "./Footer";

const Addbutton = (props) => {
  const [postDataApi, setpostDataApi] = useState("");
  const [getDataApi, setgetData] = useState({});
  const [loader, setloader] = useState(true);

  const navigate = useNavigate();
  // permenet

  const submit = (e) => {
    e.preventDefault();
    setloader(true);
    fetch("https://stockdisplaybe2-mp6mtcgm.b4a.run/addProduct_gdb/", {
      method: "POST",
      body: JSON.stringify(postDataApi),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        setgetData(json);
        setloader(false);
        //   .then(json => setpostDataApi(json.postDataApi))
        if (json["status"] == "success") {
          alert("successfullly added the product", getDataApi["status"]);
          window.location.reload(false);
        } else {
          alert("Un expected issue please retry");
          window.location.reload(false);
        }
      });

    navigate("/");
  };
  return (
    // <!-- Main modal -->
    <div class="flex flex-col  items-center justify-between space-y-3 md:space-y-0 md:space-x-4 ">
      <div class="relative  w-full max-w-4xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative p-4 bg-white  shadow dark:bg-gray-900 sm:p-5">
          {/* <!-- Modal header --> */}
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Add Product
            </h3>
            <button
              onClick={() => navigate("/")}
              type="button"
              class="text-gray-400 bg-transparent hover:bg-green-200 hover:text-green-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-green-600 dark:hover:text-white dark:text-white dark:bg-yellow-600"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={submit}>
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name*
                </label>
                <input
                  type="text"
                  name="postDataApi[Name]"
                  id="name"
                  onChange={(e) =>
                    setpostDataApi({ ...postDataApi, Name: e.target.value })
                  }
                  value={postDataApi.Name}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  required={true}
                />
              </div>
              <div>
                <label
                  for="tile_type"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tile Type*
                </label>
                <input
                  type="text"
                  name="postDataApi[tile_type]"
                  id="tile_type"
                  onChange={(e) =>
                    setpostDataApi({
                      ...postDataApi,
                      tile_type: e.target.value,
                    })
                  }
                  value={postDataApi.tile_type}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  required={true}
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company*
                </label>
                <input
                  type="text"
                  name="postDataApi[company]"
                  id="company"
                  onChange={(e) =>
                    setpostDataApi({ ...postDataApi, company: e.target.value })
                  }
                  value={postDataApi.company}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  required={true}
                />
              </div>
              <div>
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  required={true}
                >
                  Brand*
                </label>
                <input
                  type="text"
                  name="postDataApi[place]"
                  id="brand"
                  onChange={(e) =>
                    setpostDataApi({ ...postDataApi, brand: e.target.value })
                  }
                  value={postDataApi.brand}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Brand"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="company_price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company price*
                </label>
                <input
                  type="number"
                  name="postDataApi[company_price]"
                  id="company_price"
                  onChange={(e) =>
                    setpostDataApi({
                      ...postDataApi,
                      company_price: e.target.value,
                    })
                  }
                  value={postDataApi.company_price}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="display_price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Display price*
                </label>
                <input
                  type="number"
                  name="postDataApi[display_price]"
                  id="display_price"
                  onChange={(e) =>
                    setpostDataApi({
                      ...postDataApi,
                      display_price: e.target.value,
                    })
                  }
                  value={postDataApi.display_price}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="place"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Place*
                </label>
                <input
                  type="text"
                  name="postDataApi[place]"
                  id="price"
                  onChange={(e) =>
                    setpostDataApi({ ...postDataApi, place: e.target.value })
                  }
                  value={postDataApi.place}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Place"
                  required={true}
                />
              </div>

              <div>
                <label
                  for="stock"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stock*
                </label>
                <input
                  type="number"
                  name="postDataApi[stock]"
                  id="stock"
                  onChange={(e) =>
                    setpostDataApi({
                      ...postDataApi,
                      stock: e.target.value,
                    })
                  }
                  value={postDataApi.stock}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                  required={true}
                />
              </div>
            </div>
            <button
              type="submit"
              class="text-white inline-flex items-center  hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-green-700 dark:focus:ring-primary-800"
            >
              <svg
                class="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add new product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Addbutton;
