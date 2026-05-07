import React from "react";
import { Metadata } from "next";
import PolicyPage from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Refund Policy - EB1A Visionary Path",
  description: "Refund Policy for EB1A Visionary Path. Please read this policy carefully before making any payment.",
};

export default function RefundPolicy() {
  return (
    <PolicyPage title="Refund Policy" lastUpdated="May 7, 2026">
      <section>
        <p>
          At EB1A Visionary Path, we provide personalized professional services. Because our work involves significant research, strategy preparation, and resource allocation, our refund policy is structured to be fair to both the client and the company.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Position</h2>
        <p>
          Fees paid to EB1A Visionary Path are generally <strong>non-refundable</strong> once work has started. Our services are customized based on a client&apos;s unique background and goals.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund Before Work Begins</h2>
        <p>
          If you request cancellation within 48 hours of payment and <strong>before any work has started</strong>, we may consider a refund request. Approved refunds may be subject to deductions for payment gateway charges, bank fees, and administrative expenses.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No Refund After Work Starts</h2>
        <p className="mb-4">No refund will be provided once work has started on your profile, documents, or strategy. This includes situations where:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The client changes their mind or chooses another provider.</li>
          <li>The client receives an unfavorable legal opinion or government decision (RFE, NOID, or denial).</li>
          <li>A third-party platform or publisher does not accept the client.</li>
          <li>The client fails to provide required documents or cooperation.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Fees</h2>
        <p>
          Any third-party fees paid on behalf of the client (e.g., attorney fees, government filing fees, publication fees, membership fees) are strictly non-refundable as they are governed by the respective organizations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Non-Cooperation</h2>
        <p>
          We expect timely responses and cooperation. No refund will be provided if the service is delayed or affected because the client fails to provide documents, respond to communications, or follow the agreed process.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Refund Review Process</h2>
        <p>
          To request a refund, please email <strong>info@eb1avisionarypath.com</strong> with your full name, date of payment, transaction ID, and the reason for the request. We review all requests case-by-case based on the work performed and expenses incurred.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Chargebacks</h2>
        <p>
          Clients are encouraged to contact us first before initiating a dispute. We reserve the right to submit evidence of work performed and terminate services in cases of improper chargeback attempts.
        </p>
      </section>
    </PolicyPage>
  );
}
