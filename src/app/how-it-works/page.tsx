import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works - starcorn",
  description: "Browse, categorize and export public GitHub stars without a token.",
};
export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Link>
        </Button>
        <h1 className="my-8 text-4xl font-bold">How It Works</h1>
        <div className="space-y-10">
          <section>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold"><Globe className="h-5 w-5" />Direct GitHub Access</h2>
            <p>Your browser requests public starred repositories directly from api.github.com. There is no GitHub login, personal access token, or app backend.</p>
          </section>
          <section>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold"><Zap className="h-5 w-5" />Public API Rate Limits</h2>
            <p>Each API request fetches up to 100 repositories. Unauthenticated GitHub API access typically permits 60 requests per hour per IP address. If that limit is reached, wait until GitHub resets it and try again. GitHub can also apply additional limits.</p>
          </section>
          <section>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold"><Lock className="h-5 w-5" />Privacy and Exports</h2>
            <p>Repository data and your category changes are saved in this tab's session storage to survive a refresh. We removed analytics calls and do not ask for or save a GitHub token. Export your data as Markdown, CSV, or JSON before closing the tab if you want a lasting backup.</p>
            <p className="mt-3">Only publicly accessible starred repositories are supported. Your GitHub identity and private repositories are not accessed.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
