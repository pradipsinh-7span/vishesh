import { Link } from "nextra-theme-docs";

export default ({ title, description, href }) => {
  return (
    <div className="rounded-md border border-black/20 dark:border-white/20 bg-gradient-to-t from-slate-50 dark:from-slate-900 via-transparent via-40% to-transparent shadow-md max-w-xs flex flex-col">
      <h4 className="rounded-t-[inherit] px-4 py-2 border-b border-black/20  dark:border-white/20 font-medium text-lg shrink-0">
        {title}
      </h4>
      <div className="grow flex flex-col">
        <p className="px-4 py-2 grow">{description}</p>
        <div className="h-8 flex items-center justify-end pr-4 rounded-b-[inherit] mb-4 mt-4 shrink-0">
          <Link
            href={href}
            className="border border-primary-light text-primary-light px-4 py-1 rounded"
          >
            Documentation
          </Link>
        </div>
      </div>
    </div>
  );
};
