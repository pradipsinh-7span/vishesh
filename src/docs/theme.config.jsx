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
    link: "https://www.mrjadeja.in",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-75 -mx-4"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 36L23.8696 48L44.7391 36V12L23.8696 0L3 12V36ZM5.8199 34.5051L23.9503 44.9301L42.0806 34.5051V13.6552L23.9503 3.23024L5.8199 13.6552V34.5051Z"
          fill="#F97316"
        />
        <path
          d="M11.2199 13.6441H13.9599V34.1103H11.2199V13.6441Z"
          fill="#F97316"
        />
        <path
          d="M22.3029 13.6441H25.0429V34.1103H22.3029V13.6441Z"
          fill="#F97316"
        />
        <path
          d="M33.4822 13.74H36.2222V34.2062H33.4822V13.74Z"
          fill="#F97316"
        />
        <path
          d="M16.823 13.6441H19.5629V23.8772H16.823V13.6441Z"
          fill="#F97316"
        />
        <path
          d="M27.7829 23.8772H30.5229V34.1103H27.7829V23.8772Z"
          fill="#F97316"
        />
      </svg>
    ),
  },
  docsRepositoryBase: "https://github.com/mrjadeja/vishesh/blob/main/src/docs",
  darkMode: true,
  nextThemes: {
    defaultTheme: "light",
  },
  primaryHue: {
    dark: 200,
    light: 221,
  },
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
                <span className="text-amber-500 dark:text-yellow-400">
                  Fueled by Passion
                </span>
                <br />
                Powered by{" "}
                <a
                  href="https://www.mrjadeja.in"
                  target="_blank"
                  className="text-lg font-semibold text-[#F97316]"
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
      "https://mrjadeja.github.io/vishesh" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link rel="icon" href="/vishesh/favicon.ico" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Vishesh"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "The rapid design system for your next project ✌ | MrJadeja"
          }
        />
        <title>{frontMatter.title || "Vishesh by MrJadeja"}</title>
      </>
    );
  },
};
