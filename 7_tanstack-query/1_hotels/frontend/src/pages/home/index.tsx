import { FC } from "react";
import Hero from "./hero";
import Filter from "./filter";
import List from "./list";

const Home: FC = () => {
  return (
    <div className="container my-5 mx-auto">
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-4 max-lg:mat-10 gap-5">
        <Filter />

        <div className="lg:col-span-3">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
