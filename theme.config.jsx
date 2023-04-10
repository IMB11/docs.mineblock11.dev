import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  logo: <><img style={{
    width: "46px",
    borderRadius: "100%"
  }} src="https://github.com/mineblock11.png/"/><span style={{
    paddingLeft: 20,
  }}>mineblock11</span></>,
  project: {
    link: "https://github.com/mineblock11",
  },
  chat: {
    link: "https://discord.gg/UzHtJKqHny"
  },
  primaryHue: 13,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – mineblock11'
    }
  },
  editLink: {
    component: <></>
  },
  feedback: {
    content: <></>
  },
  toc: {
    float: true,
    extraContent: <>
      <small>
      Content on this site is licensed under CC-0, except the mod information pages, which are All Rights Reserved.
      </small>
    </>
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="docs.mineblock11.dev" />
      <meta property="og:description" content="Documentation on mineblock11's mods." />
    </>
  ),
  banner: {
    key: 'woof-4-0-1-release',
    text: <a href="https://modrinth.com/mod/woof" target="_blank">
      🐾 W.O.O.F 4.0.1 has released. View on Modrinth →
    </a>,
  },
  footer: {
    text: <span>
      CC0 (except mod information) {new Date().getFullYear()} © <a href="https://github.com/mineblock11" target="_blank">mineblock11</a>.
    </span>,
  },
  navigation: false
};
