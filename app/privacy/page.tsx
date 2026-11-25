import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, KEY_STORAGE, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Privacy policy · ${site.name}`,
  description: `How ${site.name} handles your account, your API keys and your code during the beta.`,
  alternates: { canonical: "/privacy" },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="25 November 2026"
      intro={
        <p>
          {site.name} is in beta. This page explains, in plain language, what we collect when you use this website
          and the app at app.getitdonetoday.in, why we need it, and what you can ask us to do with it.
        </p>
      }
      sections={[
        {
          heading: "This website",
          body: (
            <>
              <p>
                getitdonetoday.in does not use analytics, advertising or tracking cookies. Like any website, the
                hosting provider keeps standard server logs (such as IP address and browser type) to run and secure the
                site.
              </p>
              <p>
                The product tour video is loaded from jsDelivr, a public content delivery network, only when you press
                play.
              </p>
            </>
          ),
        },
        {
          heading: "Your account",
          body: (
            <p>
              You can sign in with Google or with a one-time code sent to your email. With Google sign-in, we receive
              the basic profile details Google shares, such as your name and email address. We use them to create your
              account, sign you in and contact you about the service.
            </p>
          ),
        },
        {
          heading: "Your API keys",
          body: (
            <>
              <p>
                <strong>{KEY_STORAGE}</strong>
              </p>
              <p>
                When a task runs, the request goes to the AI provider you picked using your key. That provider processes
                it under its own terms and privacy policy, and any usage costs are billed to your account with them.
              </p>
            </>
          ),
        },
        {
          heading: "Your code and tasks",
          body: (
            <>
              <p>
                If you connect GitHub, we use that access to work in the repositories you choose: creating a branch for
                each task, opening pull requests and checking whether they have been merged.
              </p>
              <p>
                To complete a task, relevant code and task details are sent to your chosen AI provider. We store your
                tasks, their results and usage figures (such as token counts) so you can see them on your board.
              </p>
              <p>We do not sell your data or use your code to advertise to you.</p>
            </>
          ),
        },
        {
          heading: "Cookies in the app",
          body: <p>The app uses cookies that are needed to keep you signed in. It does not use advertising cookies.</p>,
        },
        {
          heading: "Keeping and deleting data",
          body: (
            <p>
              We keep your data while your account is active. To get a copy of your data or have your account and data
              deleted, email {mail} from the address on your account.
            </p>
          ),
        },
        {
          heading: "Changes and contact",
          body: (
            <p>
              As the product changes during the beta, we may update this policy and will change the date at the top when
              we do. Questions? Email {mail}.
            </p>
          ),
        },
      ]}
    />
  );
}
