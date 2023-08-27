import Hero from "./Hero";
import Why from "./Why.mdx";
import Packages from "./Packages.mdx";
import Roadmap from "./Roadmap.mdx";

export default () => {
  return (
    <div className="container container-md md:container-none">
      <Hero />
      <div className="md:flex md:gap-x-10 pt-12 sm:pt-4">
        <div className="md:grow">
          <Why />
          <br />
          <br />
          <br className="sm:hidden" />
          <Packages />
        </div>
        <div className="rsm:pt-20 sm-md:pt-16 md:shrink-0">
          <Roadmap />
        </div>
      </div>
    </div>
  );
};
