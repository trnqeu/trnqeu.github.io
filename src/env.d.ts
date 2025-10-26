declare global {
  interface Window {
    silktideCookieBannerManager: {
      initCookieBanner: () => void;
      updateCookieBannerConfig: (userConfig: any) => void;
      injectScript: (url: string, loadOption?: 'async' | 'defer') => void;
    };
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export {};
