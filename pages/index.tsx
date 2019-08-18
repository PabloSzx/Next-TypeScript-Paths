import { NextPage } from "next";

import Header from "src/Components/header";
import Header2 from "@Components/header2";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Header2 />

      <span>Hello World!</span>
    </div>
  );
};

export default Home;
