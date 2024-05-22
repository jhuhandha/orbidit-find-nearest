import { City } from "../../types/city";

function Result({
  closestCities,
}: {
  loading: boolean;
  closestCities: City[];
}) {
  return closestCities.length > 0 ? (
    <div className="mt-6">
      <p className="text-2xl text-white">The nearby cities are:</p>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 mt-2">
        {closestCities.map((e: City) => (
          <div key={e.name} className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                {e.country}
              </p>
              <p className="text-lg font-semibold text-gray-700">{e.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default Result;
