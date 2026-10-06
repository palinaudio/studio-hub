import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://studio-hub-olive.vercel.app/",
    title: "PaLin Studio",
    description: "Không gian chia sẻ đánh giá plugin âm thanh, kinh nghiệm mixing & mastering và tài nguyên phòng thu chuyên nghiệp của Music Producer & DJ PaLin.",
    author: "PaLin",
    lang: "en",
    timezone: "Asia/Ho_Chi_Minh",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    {
      name: "facebook",
      url: "https://www.facebook.com/phankhanhlinh93vt",
      active: true,
    },
    {
      name: "tiktok",
      url: "https://www.tiktok.com/@palinofficial",
      active: true,
    },
    {
      name: "mail",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=phankhanhlinh1993xdvt@gmail.com",
      active: true,
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
