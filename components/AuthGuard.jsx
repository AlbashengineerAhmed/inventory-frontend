"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { IconLoader2 } from "@tabler/icons-react"

export default function AuthGuard({ children, publicPaths = ["/", "/login", "/register", "/terms", "/privacy"] }) {
  const { status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === "unauthenticated") {
      // Only redirect when the current path is not a public path
      const isPublic = publicPaths.some((p) => p === pathname)
      if (!isPublic) router.replace("/login")
    }
  }, [status, router, pathname, publicPaths])

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <IconLoader2 className="size-10 animate-spin mx-auto text-gray-500" />
      </div>
    )
  }

  // When authenticated or on a public path render children
  return <>{children}</>
}
