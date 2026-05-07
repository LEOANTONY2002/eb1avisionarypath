import React from "react";
import { Metadata } from "next";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use - EB1A Visionary Path",
  description: "Terms of Use for EB1A Visionary Path. Please read these terms carefully before using our services.",
};

export default function TermsOfUse() {
  return (
    <PolicyPage title="Terms of Use" lastUpdated="May 7, 2026">
      <section>
        <p>
          Welcome to EB1A Visionary Path. These Terms of Use govern your access to and use of our website and professional services. By using our website or engaging our services, you agree to comply with and be bound by these terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scope of Services</h2>
        <p>
          EB1A Visionary Path provides profile building, strategy, documentation support, drafting, coordination, and consulting support for individuals seeking EB1A, O-1, EB-2 NIW, or other professional pathways. We are NOT a law firm and do NOT provide legal advice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. No Guarantee of Result</h2>
        <p>
          We do not guarantee immigration approval, attorney acceptance, or any specific outcome. Our services are focused on strategy, effort, and documentation support. Decisions are made by government agencies (like USCIS) and third-party organizations, which are outside our control.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payments and Fees</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fees are charged for professional time, strategy, research, and drafting effort.</li>
          <li>Payment does not guarantee a particular result or third-party acceptance.</li>
          <li>Work begins only after receipt of agreed payment.</li>
          <li>Delayed payments may result in suspension of services.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refunds and Cancellations</h2>
        <p>
          Refunds are governed by our Refund Policy. Because our services involve personalized strategy and resource allocation, refunds are limited once work has started. Please review the Refund Policy carefully before making a payment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Responsibilities</h2>
        <p>
          Clients must provide accurate, complete, and truthful information. You are responsible for reviewing and approving all drafts before they are used. We are not liable for information that is found to be false, misleading, or unsupported.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
        <p>
          All website content, strategy frameworks, and proprietary materials remain the intellectual property of EB1A Visionary Path. Clients may use final documents prepared for them for their personal immigration or professional purposes after full payment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, EB1A Visionary Path shall not be liable for any indirect, incidental, or consequential losses, including immigration denials or loss of opportunity. Our total liability is limited to the amount actually paid for the specific service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Coimbatore, Tamil Nadu.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
        <p>
          If you have any questions regarding these Terms, please contact us at <strong>info@eb1avisionarypath.com</strong>.
        </p>
      </section>
    </PolicyPage>
  );
}
