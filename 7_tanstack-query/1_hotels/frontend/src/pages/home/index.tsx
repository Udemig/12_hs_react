import { FC } from "react";
import Hero from "./hero";
import Filter from "./filter";
import List from "./list";

const Home: FC = () => {
  return (
    <div className="container my-5 mx-auto">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-4 max-lg:mt-10 gap-5">
        <div>
          <Filter />
        </div>

        <div className="lg:col-span-3 w-full">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
