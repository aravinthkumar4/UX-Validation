import React from "react";

function RankingCard() {
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
  ];
  return (
    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Ranking
        </h5>
        <div
          class="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
        >
          View all
        </div>
      </div>
      <div class="flow-root">
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          {data?.map((i,idx)=>(<li class="py-3 sm:py-4">
            <div class="flex items-center animate-slidein [--slidein-delay:300ms] opacity-0" key={idx}>
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {i?.name}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {i?.email}
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {i?.rank}
              </div>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RankingCard;
