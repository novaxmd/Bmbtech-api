import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Bmbtech - Social Media Downloader Story",
    description: "Learn about Bmbtech, the privacy-friendly social media video downloader. Built with love by risunCode. No limits, no watermarks. View changelog and supported platforms.",
    openGraph: {
        title: "About Bmbtech | Social Media Downloader",
        description: "The story behind Bmbtech. Download videos from Facebook, Instagram, TikTok, Twitter, YouTube without limits.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
