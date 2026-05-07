import React from "react";
import { Metadata } from "next";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy - EB1A Visionary Path",
  description: "Privacy Policy for EB1A Visionary Path. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy" lastUpdated="May 7, 2026">
      <section>
        <p>
          At EB1A Visionary Path, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website, services, or interact with our team.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We may collect personal information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personal Details:</strong> Name, email address, phone number, LinkedIn profile, career history, professional achievements, and other information related to your profile evaluation.</li>
          <li><strong>Documentation:</strong> CVs, research papers, awards, media articles, membership details, reference letters, and other evidence required for EB1A, O-1, or EB-2 NIW profile building.</li>
          <li><strong>Payment Information:</strong> Billing details, transaction references, and payment records. We do not store complete card numbers.</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device type, and website usage activity collected through cookies and analytics tools.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to inquiries and consultation requests.</li>
          <li>To evaluate your profile and provide strategy support.</li>
          <li>To deliver profile building, documentation, drafting, and coordination services.</li>
          <li>To coordinate with attorneys, writers, editors, or other third parties as required for the service.</li>
          <li>To process payments and maintain business records.</li>
          <li>To communicate updates, deadlines, and service-related information.</li>
          <li>To improve our website and client experience.</li>
          <li>To comply with legal obligations and prevent fraud.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Basis and Consent</h2>
        <p>
          Where applicable, we process your personal information based on your consent, service necessity, or legitimate business interests. India&apos;s Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025 apply to digital personal data processing. By submitting your information, you consent to its use as described in this policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing of Information</h2>
        <p className="mb-4">We do not sell your personal information. We may share it only when reasonably necessary with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Internal team members and authorized consultants.</li>
          <li>Attorneys or law firms you request or approve coordination with.</li>
          <li>Writers, editors, and documentation specialists assisting with your work.</li>
          <li>Payment processors, banks, and technology vendors.</li>
          <li>Legal or regulatory authorities where required by law.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Confidentiality and Security</h2>
        <p>
          We treat client documents as confidential. Access is limited to personnel who need the information for service delivery. While we use reasonable safeguards to protect your data, no method of digital transmission is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
        <p>
          Subject to applicable law, you may request to access, correct, or delete your personal information. You may also withdraw consent for certain processing activities. To make a request, contact us at <strong>info@eb1avisionarypath.com</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Users</h2>
        <p>
          Your information may be processed in India or other countries where our service providers operate. Data protection laws may differ from country to country.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be posted on our website with a revised &quot;Last Updated&quot; date.
        </p>
      </section>
    </PolicyPage>
  );
}
