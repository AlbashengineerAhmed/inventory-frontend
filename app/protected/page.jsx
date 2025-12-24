"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogoutButton } from "@/components/logout-button";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <LogoutButton variant="outline" />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome back!</CardTitle>
            <CardDescription>
              Here's your profile information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <p className="text-lg text-gray-900">{session.user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <p className="text-lg text-gray-900">
                  {session.user.name || "Not specified"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Login Provider
                </label>
                <p className="text-lg text-gray-900 capitalize">
                  {session.user.provider || "Email & Password"}
                </p>
              </div>
              {session.user.firstName && (
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    First Name
                  </label>
                  <p className="text-lg text-gray-900">
                    {session.user.firstName}
                  </p>
                </div>
              )}
              {session.user.lastName && (
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Last Name
                  </label>
                  <p className="text-lg text-gray-900">
                    {session.user.lastName}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Session Details</CardTitle>
            <CardDescription>
              Raw session data (for debugging)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96 text-sm">
              {JSON.stringify(session, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
