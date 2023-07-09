import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Logo } from "./components/icons/Logo";
import { useState, useEffect } from "react";
import { ThemeSwitch } from "nextra-theme-docs";

export default {
  logo: <Logo />,
  project: {
    link: "https://github.com/mrjadeja/vishesh",
  },
  chat: {
    link: "https://twitter.com/MrJadeja_in",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },
  docsRepositoryBase:
    "https://github.com/mrjadeja/vishesh/blob/main/src/docs/pages",
  darkMode: true,
  primaryHue: 221,
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(navigator.language, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>Last updated on {dateString}</>;
  },
  footer: {
    component: () => {
      const { asPath } = useRouter();
      return (
        <div className="bg-gray-100 dark:bg-gray-900">
          <div className="container container-md">
            {asPath === "/" ? (
              <div className="py-2">
                <ThemeSwitch className="px-0 scale-110" />
                <hr className="border-gray-400 dark:border-neutral-800" />
              </div>
            ) : (
              <></>
            )}
            <div className="py-8">
              <h5 className="text-lg">
                Powered by{" "}
                <a
                  href="https://mrjadeja.vercel.app"
                  target="_blank"
                  className="text-lg font-semibold text-[#ff9900]"
                >
                  MrJadeja
                </a>
              </h5>
              <small>© {new Date().getFullYear()} The Vishesh project.</small>
            </div>
          </div>
        </div>
      );
    },
  },
  feedback: {
    content: "Question? Start a discussion",
    useLink: () =>
      "https://github.com/mrjadeja/vishesh/discussions/new?category=q-a",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | MrJadeja",
      };
    }
    return {
      titleTemplate: "%s",
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://vishesh.github.io" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "Vishesh Preset"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "The tailwind css preset to rapidly build any UI"
          }
        />
        <title>{frontMatter.title || "Vishesh Preset"}</title>
      </>
    );
  },
};
