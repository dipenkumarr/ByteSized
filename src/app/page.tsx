"use client";

import { Binary } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div className="flex flex-col sm:px-4 min-h-screen bg-black text-white overflow-hidden overscroll-contain">
			<header className="px-4 py-4 lg:px-6 flex items-center justify-between">
				<Link
					href="#"
					className="flex items-center justify-center gap-2 text-2xl"
					prefetch={false}
				>
					<Binary className="h-8 w-8" />
					<span className="font-semibold">ByteSized</span>
				</Link>
				<nav className="flex gap-6">
					<Link
						href="/login"
						className="text-lg text-white font-semibold sm:text-lg hover:text-orange-500 transition-colors"
						prefetch={false}
					>
						Sign In
					</Link>
				</nav>
			</header>

			<main className="flex-1">
				<section className="w-full py-12 md:py-24">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="flex flex-col lg:flex-row gap-12 items-center">
							<div className="flex flex-col justify-center space-y-4 lg:w-1/2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Ask and Answer Technical Questions
								</h1>
								<p className="text-gray-100 md:text-lg">
									ByteSized is a community-driven platform
									where developers can ask and answer
									technical questions, share knowledge, and
									build their reputation.
								</p>
								<ul className="space-y-2 py-4 text-lg">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-4 w-4 text-orange-500" />
										User-friendly interface
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-4 w-4 text-orange-500" />
										Upvote and downvote system
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-4 w-4 text-orange-500" />
										Community moderation
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-4 w-4 text-orange-500" />
										Profile and reputation system
									</li>
								</ul>
								<div className="flex flex-col sm:flex-row gap-4">
									<Link href="/register" prefetch={false}>
										<div className="flex items-center justify-center rounded-xl px-6 py-2 bg-orange-500 text-sm sm:text-base font-medium text-white hover:bg-orange-600 transition-colors">
											Sign Up
										</div>
									</Link>
								</div>
							</div>
							<div className="lg:w-1/2">
								{/* <img
									src="/public/Designer.jpeg"
									width="550"
									height="550"
									alt="Hero"
									className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
								/> */}
								<Image
									src={"/Designer.png"}
									width={500}
									height={500}
									alt="img"
									className="rounded-full shadow-orange-800 shadow-2xl bg-blend-soft-light"
								></Image>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 bg-gray-900">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Why Choose ByteSized?
							</h2>
							<p className="mt-4 text-gray-400 md:text-lg max-w-2xl mx-auto">
								ByteSized empowers developers to share
								knowledge, build their reputation, and solve
								technical challenges together.
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							<FeatureCard
								title="User-Friendly Interface"
								description="Navigate the platform with ease, find relevant questions and answers quickly."
							/>
							<FeatureCard
								title="Voting System"
								description="Upvote and downvote questions and answers to surface the most valuable content."
							/>
							<FeatureCard
								title="Community Moderation"
								description="Maintain high standards through community-driven moderation and curation."
							/>
							<FeatureCard
								title="Profile and Reputation"
								description="Showcase your expertise and build your reputation within the developer community."
							/>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24">
					<div className="container px-4 md:px-6 mx-auto text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
							Join the ByteSized Community
						</h2>
						<p className="text-gray-400 md:text-lg max-w-2xl mx-auto mb-8">
							Sign up today and start asking and answering
							technical questions, share your knowledge, and build
							your reputation within the developer community.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/register" prefetch={false}>
								<div className="flex items-center justify-center rounded-xl px-6 py-2 bg-orange-500 text-sm sm:text-base font-medium text-white hover:bg-orange-600 transition-colors">
									Sign Up
								</div>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<footer className="py-6 border-t border-gray-800">
				<div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
					<p className="text-xs sm:text-base text-gray-100">
						&copy; 2024 ByteSized. All rights reserved.
					</p>
					<nav className="flex gap-4 mt-4 sm:mt-0">
						<Link
							href="#"
							className="text-xs sm:text-base text-gray-100 hover:text-orange-500 transition-colors"
							prefetch={false}
						>
							Terms of Service
						</Link>
						<Link
							href="#"
							className="text-xs sm:text-base text-gray-100 hover:text-orange-500 transition-colors"
							prefetch={false}
						>
							Privacy
						</Link>
					</nav>
				</div>
			</footer>
		</div>
	);
}

function FeatureCard({ title, description }: any) {
	return (
		<div className="bg-gray-800 p-6 rounded-lg">
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p className="text-gray-400">{description}</p>
		</div>
	);
}

function CheckIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}

function MenuIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}
