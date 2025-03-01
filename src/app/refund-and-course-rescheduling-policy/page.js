import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Refund and Course Rescheduling Policy | VR IT Solutions',
  description: 'Our refund and course rescheduling policies for online and classroom training courses',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="bg-primary/10 p-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">Refund and Course Rescheduling Policy</h1>
          <p className="mt-2 text-gray-600">Last updated: March 1, 2025</p>
        </div>
        
        <div className="p-8">
          <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              Thank you for buying our courses. We want to make sure that our users have a rewarding experience while they are discovering information, assessing, and purchasing our training courses, whether it may be for online or classroom training courses.
            </p>
          </div>
          
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              As with any online purchase experience, the below are the terms and conditions that govern the Refund Policy. When you buy a training course on the vr it solutions website you agree to our Privacy Policy and Terms of use policy and the points below.
            </p>
          </section>
          
          <section className="mb-8">
            <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg mb-6 flex">
              <div className="mr-3 mt-1 flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-yellow-800">Important Notice</p>
                <p className="text-yellow-700">
                  VRIT solutions reserves the right to postpone/cancel an event because of instructor illness or force-majeure events (like floods, earthquakes, political instability, pandemic situation like COVID19, etc.)
                </p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Refund Policy Terms</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>The refund request will not be accepted if you have attended the online classroom training for more than 1 day's session or have accessed / downloaded course material from the learning portal.</li>
              <li>No refund will be provided on discounted courses.</li>
              <li>No refund will be provided for the academic institute tie up courses.</li>
              <li>If the delegate doesn't turn up on the given schedule then no refund will be provided.</li>
              <li>Raise refund request within 7 days of commencement of the first session. Any refund request beyond 7 days of purchasing the course will not be accepted and no refund will be provided.</li>
              <li>In the case of refund, taxes amount will not be refunded.</li>
              <li>If the learners wants to re-attended the online instructor led classes for the purchased course and if their no availability of the batch in near future then in that case maximum refund applicable will be 10% of the total amount paid.</li>
              <li>If due to any technical reason learners are not able to access the self-paced videos or class recordings and already attended the complete course through instructor led online classes then in that case no refund is applicable or a can be provided with a voucher for the amount equivalent of the 10% amount paid by the learner at the time of enrollment.</li>
            </ul>
            
            <div className="bg-green-50 border border-green-100 p-4 rounded-lg mt-6">
              <p className="text-green-800 font-medium">
                Note: All refunds will be processed within 20 working days of receipt of the refund request.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">CANCELLATION AND REFUNDS: SELF PACED LEARNING</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>No refund will be done for Self Placed courses.</li>
              <li>No refund will be provided and access will be revoked, If anytime found course is been shared with others / multiple users or intention of course purchase is to copy the material/ Content and account will be blocked at the same time.</li>
            </ul>
          </section>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link href="/contactus" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Have questions? Contact us
              </Link>
              
              <p className="text-gray-600 text-sm">
                For refund requests, please email{' '}
                <Link href="mailto:info@vritsol.com" className="text-primary hover:underline">
                info@vritsol.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}