import Hero from "./Hero";
import TheWhy from "./TheWhy.mdx";
import Products from "./Products.mdx";
import Roadmap from "./Roadmap.mdx";

export default () => {
  return (
    <div className="container container-md md:container-none">
      <Hero />
      <div className="md:flex md:gap-x-10 pt-12 sm:pt-4">
        <div className="md:grow">
          <TheWhy />
          <br />
          <br />
          <br className="sm:hidden" />
          <Products />
        </div>
        <div className="zero-sm:pt-20 sm-md:pt-16 md:shrink-0">
          <Roadmap />
        </div>
      </div>
    </div>
  );
};
