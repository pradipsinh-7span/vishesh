import { Link } from "nextra-theme-docs";
import { HeroImage } from "../icons/HeroImage";

export default () => {
  return (
    <section className="py-10 sm:flex sm:flex-row-reverse md:items-center sm-md:pt-8 xl:py-16">
      <div className="mx-auto w-40 text-primary dark:text-primary-light sm:w-44 xl:w-72">
        <HeroImage />
      </div>
      <div className="sm:max-w-xs md:max-w-sm xl:max-w-lg">
        <div className="zero-sm:mt-10 text-black dark:text-white">
          <h2 className="text-3xl font-semibold capitalize xl:text-5xl xl:leading-[60px]">
            The rapid design system for your next project
          </h2>
          <h4 className="mt-4 xl:text-xl xl:mt-6">
            Unlease the true potential of your project with <em>vishesh</em>,
            where confidence meets <strong>boldness</strong> in design.
          </h4>
        </div>
        <div className="mt-6 flex items-center xl:mt-8">
          <Link
            href="#products"
            className="bg-primary px-8 py-1.5 rounded text-white text-lg font-medium border border-primary hover:bg-primary-light transition-colors ease-in-out duration-200"
          >
            Explore
          </Link>
          <Link
            href="#roadmap"
            className="font-medium text-lg text-primary ml-10 px-8 py-1.5 rounded border border-primary hover:bg-primary-light hover:text-white transition-colors ease-in-out duration-200  dark:border-primary-light md:hidden"
          >
            Roadmap
          </Link>
        </div>
      </div>
    </section>
  );
};
