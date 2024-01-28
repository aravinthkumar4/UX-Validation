import React from "react";
import { Link } from "react-router-dom";

function Table({popup}) {
  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      ux: 8.5,
      url: "https://example1.com",
      rank: 1,
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      ux: 7.8,
      url: "https://example2.com",
      rank: 2,
    },
    {
      name: "Bob Johnson",
      email: "bob@example.com",
      ux: 9.2,
      url: "https://example3.com",
      rank: 3,
    },
    {
      name: "Alice Brown",
      email: "alice@example.com",
      ux: 8.0,
      url: "https://example4.com",
      rank: 4,
    },
    {
      name: "Charlie Wilson",
      email: "charlie@example.com",
      ux: 7.5,
      url: "https://example5.com",
      rank: 5,
    },
    {
      name: "Eva Davis",
      email: "eva@example.com",
      ux: 8.8,
      url: "https://example6.com",
      rank: 6,
    },
    {
      name: "Frank White",
      email: "frank@example.com",
      ux: 7.0,
      url: "https://example7.com",
      rank: 7,
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              UX Url
            </th>
            <th scope="col" className="px-6 py-3">
              Rank
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i, idx) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 "
              key={idx}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {i?.name}
              </th>
              <td className="px-6 py-4">email@windster.com</td>
              <td className="px-6 py-4 text-indigo-400">
                <Link to={i?.url} target="#blank">
                  {i?.url}
                </Link>
              </td>
              <td className="px-6 py-4">{i?.rank}</td>
              <td className="px-6 py-4">
                {popup}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing <span className="font-semibold text-gray-900 ">1-10</span> of{" "}
          <span className="font-semibold text-gray-900 ">1000</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <div
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Previous
            </div>
          </li>
          <li>
            <div
              className="flex items-center justify-center px-3 h-8 leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-gray-100 hover:text-blue-700 "
            >
              1
            </div>
          </li>
          <li>
            <div
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              2
            </div>
          </li>
          <li>
            <div
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-gray-500 border border-gray-300 bg-white hover:bg-blue-100 hover:text-blue-700"
            >
              3
            </div>
          </li>
          <li>
            <div
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              4
            </div>
          </li>
          <li>
            <div
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              5
            </div>
          </li>
          <li>
            <div
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Table;
