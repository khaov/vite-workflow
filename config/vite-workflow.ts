import type { SiteConfig } from "@proleads/workflow";

export default {
  common: {
    enteredLocales: ["ru"],
    siteAlias: "vistazaim",
    registrationAlias: "vistazaim",
    apiUrl: "/api/",
    countryId: 1,
    country_alias: "ru",
    available_site_templates: [],
  },
  requests: {
    info: {
      url: "site/get-info",
      alias: "vistazaim",
      language: "*",
    },
  },
  sequences: {},
} satisfies SiteConfig;
