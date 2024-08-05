import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const fontHeading = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-heading",
});

const fontBody = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-body",
});

export default function Layout({ children }: any) {
	return (
		<html lang="en" className="">
			<body
				className={cn(
					"antialiased",
					fontHeading.variable,
					fontBody.variable,
					"dark:bg-black/90 dark:text-white"
				)}
			>
				{children}
			</body>
		</html>
	);
}
