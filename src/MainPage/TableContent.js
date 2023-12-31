import { json, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JsonData from "./data.json";
import FooterBar from "./Footer";

const TableData = (props) => {
  //   const [postDataApi, setdeleteData] = useState("");
  const [getDataApi, setgetData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState("");
  const [TableData, setTableData] = useState("");
  const [clickable, setClickable] = useState(false);
  const [sortkey, setsortkey] = useState(false);
  const navigate = useNavigate();
  const write_permision =
    window.localStorage.getItem("write") === "true" ? true : false;
  const databin = (e, info) => {
    setLoading(true);
    // `https://stockdisplaybe2-mp6mtcgm.b4a.run/bin/?name=${info.Name}`
    fetch(`https://stockdisplaybe2-mp6mtcgm.b4a.run/bin_gdb/?name=${info}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // setdeleteData(json);
        setLoading(false);
        if (json["status"] === "success") {
          alert(`successfullly deleted ${info}`);
          window.location.reload(false);
        } else {
          alert("Un expected issue please retry");
        }
      });
  };
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...getDataApi].sort((a, b) => {
        return (
          a["stock"].localeCompare(b["stock"], "en", {
            numeric: true,
          }) * (sortOrder === "desc" ? 1 : -1)
        );
      });
      console.log(sorted);
      setgetData(sorted);
      return sorted;
    }
  };

  const DisplayData = getDataApi
    .filter((info) => {
      if (query === "") {
        return info;
      } else if (info.Name.toLowerCase().includes(query.toLowerCase())) {
        return info;
      } else if (info.tile_type.toLowerCase().includes(query.toLowerCase())) {
        return info;
      } else if (info.place.toLowerCase().includes(query.toLowerCase())) {
        return info;
      } else if (info.company.toLowerCase().includes(query.toLowerCase())) {
        return info;
      }
    })

    .map((info) => {
      return (
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" class="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {info.Name}
          </th>
          <td class="px-6 py-4">{info.tile_type}</td>
          <td class="px-6 py-4">{info.company}</td>
          <td class="px-6 py-4">{info.brand}</td>
          <td class="px-6 py-4">{info.company_price}</td>
          <td class="px-6 py-4">{info.display_price}</td>
          <td class="px-6 py-4">{info.place}</td>
          <td class="px-6 py-4">{info.stock}</td>
          <td class="flex items-center px-6 py-4">
            <a
              href="#"
              class={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${
                write_permision ? "null" : "hidden"
              }`}
              id={info.Name}
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("edit_data", JSON.stringify(info));
                navigate("/editdata");
              }}
            >
              Edit
            </a>
            <a
              href="#"
              class={`font-medium text-red-600 dark:text-red-500 hover:underline ms-3 ${
                write_permision ? "null" : "hidden"
              }`}
              id={info.Name}
              onClick={(e) => databin(e, info.Name)}
            >
              Remove
            </a>
          </td>
        </tr>
      );
    });

  useEffect(() => {
    setLoading(true);
    setClickable(true);
    try {
      fetch("https://stockdisplaybe2-mp6mtcgm.b4a.run/getData_gdb/", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          setgetData(json);
        });
      JSON.stringify(json);
    } catch (error) {
      setgetData([{}]);
    }

    //
  }, []);
  //
  // {
  //   if (setLoading !== true) {
  //     // console.log(
  //     //   String(
  //     //     `font-medium text-red-600 dark:text-red-500 hover:underline ms-3 ${
  //     //       write_permision ? "null" : "hidden"
  //     //     }`
  //     //   )
  //     // );
  //   }
  // }

  return (
    <div>
      <section class="mx-auto max-w-screen-2xl px-2 lg:px-0">
        <div class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 ">
          {/* <!-- Start coding here --> */}
          <div class="bg-white dark:bg-slate-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-5">
              <div class="w-full md:w-1/2">
                <form class="flex items-center">
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required=""
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <button
                  type="button"
                  onClick={() => navigate("/1")}
                  class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-primary-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  {/* {isVisible && <Addbutton />} */}
                  <svg
                    class="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewbox="0 0 0 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M10 6a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    />
                  </svg>
                  Add product
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Tile Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Company
                </th>
                <th scope="col" class="px-6 py-3">
                  Brand
                </th>
                <th scope="col" class="px-6 py-3">
                  Company Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Display Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Place
                </th>

                <th scope="col">
                  <button
                    class="px-6 py-3"
                    onClick={(e) => {
                      e.preventDefault();
                      setsortkey(!sortkey);
                      let ord = sortkey ? "asc" : "desc";
                      handleSorting("stock", ord);
                    }}
                  >
                    Stock ⬆️
                  </button>
                </th>

                <th type="" scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {submit()} */}
              {DisplayData}
            </tbody>
          </table>
        </div>
      </section>
      <FooterBar />
    </div>
  );
};
export default TableData;
