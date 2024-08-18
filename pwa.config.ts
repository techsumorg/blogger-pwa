import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'TechSum',
  shortName: 'TechSum',
  description: 'TechSum - Tổng hợp tin tức công nghệ hàng đầu, cập nhật nhanh chóng.',
  direction: 'auto',
  language: 'vi-VN',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.techsum.org',
} satisfies Config;
