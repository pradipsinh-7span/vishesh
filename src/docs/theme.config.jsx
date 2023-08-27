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
        width="33"
        height="19"
        viewBox="0 0 33 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.12891 0.9375H5.10547L9.48828 13.4648L13.8711 0.9375H16.8477L10.6836 18H8.29297L2.12891 0.9375ZM0.523438 0.9375H3.48828L4.02734 13.1484V18H0.523438V0.9375ZM15.4883 0.9375H18.4648V18H14.9492V13.1484L15.4883 0.9375Z"
          fill="#F97316"
        />
        <path
          d="M29.4492 12.7617V0.9375H32.9531V12.7617C32.9531 13.9023 32.7031 14.8828 32.2031 15.7031C31.7031 16.5156 31.0195 17.1406 30.1523 17.5781C29.293 18.0156 28.3242 18.2344 27.2461 18.2344C26.1289 18.2344 25.1406 18.0469 24.2812 17.6719C23.4219 17.2969 22.7461 16.7227 22.2539 15.9492C21.7617 15.168 21.5156 14.1797 21.5156 12.9844H25.043C25.043 13.6094 25.1289 14.1055 25.3008 14.4727C25.4805 14.8398 25.7344 15.1016 26.0625 15.2578C26.3906 15.4141 26.7852 15.4922 27.2461 15.4922C27.6914 15.4922 28.0781 15.3867 28.4062 15.1758C28.7344 14.9648 28.9883 14.6562 29.168 14.25C29.3555 13.8438 29.4492 13.3477 29.4492 12.7617Z"
          fill="#F97316"
        />
      </svg>
    ),
  },
  docsRepositoryBase: "https://github.com/mrjadeja/vishesh/blob/main/src/docs",
  darkMode: true,
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
                  href="https://mrjadeja.vercel.app"
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
