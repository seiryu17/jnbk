const env = process.env.APP_ENV || "local";

const CONFIGS = {
  LOCAL: {
    API_URL: "https://fakestoreapi.com",
    WS_URL: "",
    WS_PATH: "",
    STORAGE_DOMAIN: "localhost",
    STORAGE_SUFFIX: "_local",
    FS_ENABLE: false,
    SENTRY_ENABLE: false,
    GA_ENABLE: false,
    GTM_ENABLE: false,
    GTM_CONTAINER_ID: "",
    FBPIXEL_ENABLE: false,
    IS_DEBUG: true,
    IS_BYPASS_WEBVIEW_AUTH: true,
    NO_INDEX: true,
    HOTJAR_ENABLE: false,
  },
  DEV: {
    API_URL: "",
    WS_URL: "",
    WS_PATH: "",
    STORAGE_DOMAIN: "",
    STORAGE_SUFFIX: "_dev",
    FS_ENABLE: false,
    SENTRY_ENABLE: true,
    GA_ENABLE: false,
    GTM_ENABLE: false,
    GTM_CONTAINER_ID: "",
    FBPIXEL_ENABLE: false,
    IS_DEBUG: false,
    IS_BYPASS_WEBVIEW_AUTH: true,
    NO_INDEX: true,
    HOTJAR_ENABLE: false,
  },
  PROD: {
    API_URL: "",
    WS_URL: "",
    WS_PATH: "",
    STORAGE_DOMAIN: "",
    STORAGE_SUFFIX: "",
    FS_ENABLE: false,
    SENTRY_ENABLE: true,
    GA_ENABLE: false,
    GTM_ENABLE: true,
    GTM_CONTAINER_ID: "",
    FBPIXEL_ENABLE: true,
    IS_DEBUG: false,
    IS_BYPASS_WEBVIEW_AUTH: false,
    NO_INDEX: false,
    HOTJAR_ENABLE: true,
  },
};

let CONFIG = CONFIGS.LOCAL;
if (env === "development") {
  CONFIG = CONFIGS.DEV;
}
if (env === "production") {
  CONFIG = CONFIGS.PROD;
}

export default CONFIG;
