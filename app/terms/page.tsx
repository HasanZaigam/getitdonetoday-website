import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Terms of use · ${site.name}`,
  description: `The terms for using ${site.name} during the beta.`,
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      updated="25 November 2026"
      intro={
        <p>
          These terms apply when you use {site.name}, including the app at app.getitdonetoday.in. By creating an account
          you agree to them. They are written to be short and readable; if anything is unclear, email {mail}.
        </p>
      }
      sections={[
        {
          heading: "It's a beta",
          body: (
            <p>
              {site.name} is in beta. Features may change, break or be removed, and the service is provided “as is”
              without guarantees of availability or fitness for a particular purpose. Please keep your own backups of
              anything important.
            </p>
          ),
        },
        {
          heading: "Pricing",
          body: (
            <p>
              Everything is free while {site.name} is in beta. If we introduce paid plans, we will announce them before
              they apply to you, and you can choose whether to continue.
            </p>
          ),
        },
        {
          heading: "Your keys and provider costs",
          body: (
            <p>
              You bring your own API keys. Your use of each AI provider is governed by that provider’s terms, and any
              costs they charge are yours. You are responsible for keeping your provider accounts and keys in good
              standing.
            </p>
          ),
        },
        {
          heading: "Your code and content",
          body: (
            <p>
              Your code, tasks and results remain yours. You give us permission to access and process them only as
              needed to run the service for you, for example sending task details to your chosen AI provider or opening
              pull requests in repositories you connect. Our <Link href="/privacy">privacy policy</Link> explains how
              this data is handled.
            </p>
          ),
        },
        {
          heading: "Review AI output",
          body: (
            <p>
              AI-generated code can be wrong, insecure or incomplete, even after checks and review. You are responsible
              for reviewing changes before you merge or deploy them.
            </p>
          ),
        },
        {
          heading: "Acceptable use",
          body: (
            <ul>
              <li>Only connect repositories and accounts you are authorised to use.</li>
              <li>Don’t use the service for anything illegal, harmful or abusive.</li>
              <li>Don’t try to break, overload or get around the security of the service.</li>
            </ul>
          ),
        },
        {
          heading: "Ending your use",
          body: (
            <p>
              You can stop using {site.name} at any time and ask us to delete your account by emailing {mail}. We may
              suspend accounts that break these terms or put the service or other users at risk.
            </p>
          ),
        },
        {
          heading: "Liability",
          body: (
            <p>
              To the extent the law allows, {site.name} is not liable for indirect or consequential losses, or for
              losses caused by AI output, third-party providers or code you choose to merge.
            </p>
          ),
        },
        {
          heading: "Changes and contact",
          body: (
            <p>
              We may update these terms during the beta and will change the date at the top when we do. Questions?
              Email {mail}.
            </p>
          ),
        },
      ]}
    />
  );
}
