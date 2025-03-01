import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | VR IT Solutions",
  description:
    "Learn about how VR IT Solutions collects, uses, and protects your personal information",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="bg-primary/10 p-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">Last updated: March 1, 2025</p>
        </div>

        <div className="p-8">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed">
              VRIT solutions ("VRIT solutions," "we," or "us") is committed to
              protecting your privacy. We take data protection and privacy very
              seriously. This Privacy Policy ("Policy") describes how VRIT
              solutions collects, uses, shares and secures the personal
              information you provide when you visit the Websites and Mobile
              Apps owned and operated by VRIT solutions (listed below), and when
              you use our Service(s). It also describes your choices regarding
              the use, access, and correction of your personal information. The
              use of information collected through our Service(s) shall be
              limited to the purpose of providing the service for which you have
              engaged VRIT solutions. The capitalized terms used in this Policy
              but not defined herein shall have the same meaning as defined in
              our Terms of Service.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please read this Privacy Policy carefully, as it governs how you
              use VRIT solutions or its affiliate products. If you do not agree
              to this Privacy Policy, please do not use VRIT solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Notice to End Users
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In some cases, an administrator may create an account in VRIT
              solutions on the behalf of an "End-User" and may provide his/her
              information, including Personal Information. In such cases, the
              administrator who may be your Employer or a VRIT solutions
              Authorized Training Partner (ATP) is our "Customer." We collect
              Information under the direction of our customers and have no
              direct relationship with the End-User whose personal data we
              process.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              An end-user's use of the VRIT solutions platform may be subject to
              the Customer's policies if any.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our Customer must have the authority to act on behalf of the
              End-User and to consent to the collection and use of their
              Personal Information as described in this Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you are an End-user using our platform, please direct your
              privacy inquiries to your administrator. VRIT solutions is not
              responsible for the privacy or security practices of our
              customers, which may differ from those outlined in this privacy
              statement.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              VRIT solutions does not send personalized advertisements or
              Marketing communication to end-users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              International Transfer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Personal data collected by VRIT solutions may be stored and
              processed in your region, and in any other country where VRIT
              solutions or its affiliates and data sub-processors operate
              facilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Use of your Personal Information and Other Data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              VRIT solutions uses this Privacy Policy to govern the use of
              personal information you provide to us. We use your personal
              information solely to provide our services to you.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              If you have any questions about our privacy practices or this
              policy, please contact us at{" "}
              <Link
                href="mailto:info@vritsol.com"
                className="text-primary hover:underline"
              >
                info@vritsol.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
