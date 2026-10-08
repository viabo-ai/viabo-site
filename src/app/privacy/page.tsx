import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy · viabo",
  description: "How viabo AI handles personal information collected through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        sub="How viabo AI collects, uses and protects your personal information."
      />
      <section className="section">
        <div className="container stack measure">
          <p className="lede">
            {site.legalName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed
            to protecting your privacy. This policy explains how we collect, use and safeguard
            information you share with us through this website. It covers the website only, not the
            viabo platform.
          </p>

          <h2>1. Information we collect</h2>
          <p>
            <strong>Information you give us.</strong> When you submit the contact form, we collect
            your name, work email address, phone number (if provided), organisation name, and any
            details you share about your sites or project. We use this to reply to your enquiry and,
            if you request one, to arrange a walkthrough or follow-up call.
          </p>
          <p>
            <strong>Automatically collected data.</strong> Our hosting and analytics tools may collect
            your IP address, browser type, operating system, referral URL and pages visited. We use
            privacy-respecting analytics that do not use cookies or track you across other websites.
            No personal information is collected by analytics.
          </p>
          <p>We do not knowingly collect information from individuals under 16 years of age.</p>

          <h2>2. How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to enquiries and arrange requested walkthroughs or calls</li>
            <li>Operate and improve this website and its content</li>
            <li>Analyse how the site is used so we can make it more useful</li>
            <li>Send updates or information, if you have opted in</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>

          <h2>3. Cookies and tracking</h2>
          <p>
            This website uses privacy-respecting analytics that do not set cookies or build profiles
            across sites. We do not use advertising cookies, retargeting pixels, or third-party
            tracking scripts. If this changes, we will update this policy and, where required by law,
            ask for your consent.
          </p>

          <h2>4. Data storage and security</h2>
          <p>
            Enquiries submitted through the contact form are stored in our customer relationship
            system, which is operated by {site.legalName} and hosted with our business software
            provider. We implement reasonable technical and organisational measures to protect your
            information against unauthorised access, loss or disclosure. No method of transmission
            over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Third-party services</h2>
          <p>
            We use a small number of third-party services — including our CRM, hosting and analytics
            providers — that may process data on our behalf. These providers are required to handle
            your data in accordance with applicable privacy laws and are not permitted to use it for
            their own purposes. We do not share your personal information with third parties for their
            own marketing.
          </p>

          <h2>6. Your rights</h2>
          <p>
            Depending on your location, you may have rights under applicable privacy law, including
            the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Ask us to correct inaccurate or incomplete information</li>
            <li>Ask us to delete your information</li>
            <li>Withdraw consent or object to processing based on legitimate interests</li>
            <li>Lodge a complaint with a relevant regulatory authority</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond within a reasonable
            time and in any case within 30 days.
          </p>

          <h2>7. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or for legal, operational or regulatory reasons. Updates will be posted on this page with
            a revised effective date. Continued use of this website after an update constitutes
            acceptance of the revised policy.
          </p>

          <h2>8. Contact us</h2>
          <p>
            For questions, concerns or requests relating to this policy or your personal information,
            please contact:
          </p>
          <p>
            {site.legalName}
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <p className="caption" style={{ marginTop: "var(--space-xl)", color: "var(--clr-muted)" }}>
            Effective date: October 2026
          </p>
        </div>
      </section>
    </>
  );
}
