"use client";

import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	const { session } = useAuthStore();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			router.push("/");
		}
	}, [session, router]);

	if (session) {
		return null;
	}

	return (
		<div className="overscroll-none">
			<div className="">{children}</div>
		</div>
	);
}
