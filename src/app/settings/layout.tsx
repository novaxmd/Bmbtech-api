import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Settings | Bmbtech - Customize Your Experience",
    description: "Configure Bmbtech settings - themes, cookies, storage, and integrations. Personalize your social media downloader experience.",
    openGraph: {
        title: "Settings | Bmbtech",
        description: "Configure your Bmbtech settings and preferences.",
    },
};

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
