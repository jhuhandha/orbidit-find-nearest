import Input from "../components/input/input";
import Result from "../components/result/result";
import { useCities } from "../hooks/useCities";
import { Layout } from "./../../../components/layout/layout";

function Index() {
  const { closestCities, findClosestCities, clearResult, items, loading } =
    useCities();

  return (
    <Layout>
      <>
        <Input
          findClosestCities={findClosestCities}
          items={items}
          clearResult={clearResult}
          key={"input"}
        />
        <Result
          loading={loading}
          closestCities={closestCities}
          key={"result"}
        />
      </>
    </Layout>
  );
}

export default Index;
