import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://studio-hub-olive.vercel.app/",
    title: "PaLin Studio",
    description: "Không gian chia sẻ đánh giá plugin âm thanh, kinh nghiệm mixing & mastering và tài nguyên phòng thu chuyên nghiệp của Music Producer & DJ PaLin.",
    author: "PaLin",
    lang: "vi",
    timezone: "Asia/Ho_Chi_Minh",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      url: "https://github.com/palinaudio/studio-hub/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    {
      name: "facebook",
      url: "https://www.facebook.com/phankhanhlinh93vt",
    },
    {
      name: "tiktok",
      url: "https://www.tiktok.com/@palinofficial",
    },
    {
      name: "mail",
      url: "mailto:phankhanhlinh1993xdvt@gmail.com",
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
