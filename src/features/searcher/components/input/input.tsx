import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { City } from "../../types/city";

function Index({
  items,
  findClosestCities,
  clearResult,
}: {
  items: City[];
  findClosestCities: Function;
  clearResult: Function;
}) {
  return (
    <div className="mt-4">
      <ReactSearchAutocomplete<City>
        aria-label={"Search city"}
        aria-required="true"
        items={items}
        formatResult={(item: any) => {
          return (
            <div key={item.name}>
              {item.name} ({item.country})
            </div>
          );
        }}
        onSelect={(item) =>
          findClosestCities(
            parseFloat(item?.lat || "0"),
            parseFloat(item?.lng || "0")
          )
        }
        onClear={clearResult}
        placeholder="Type the city you want to search for"
        showIcon={false}
        styling={{
          height: "60px",
          borderRadius: "7px",
          iconColor: "#4f46e5",
          fontSize: "18px",
        }}
        autoFocus
      />
    </div>
  );
}

export default Index;
