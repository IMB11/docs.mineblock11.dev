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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="docs.mineblock11.dev" />
      <meta property="og:description" content="Documentation on mineblock11's mods." />
    </>
  ),
  banner: {
    key: 'tmt-release',
    text: <a href="https://modrinth.com/mod/toggle-my-tooltips" target="_blank">
      🎉 Toggle My Tooltips has released. View on Modrinth →
    </a>,
  },
  footer: {
    text: <span>
      CC0 {new Date().getFullYear()} © <a href="https://nextra.site" target="_blank">mineblock11</a>.
    </span>,
  },
  navigation: false
};
