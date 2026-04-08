import React from "react";

export default function CancellationPolicy() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-start py-16 px-4">
      <div className="max-w-4xl w-full text-slate-700 leading-relaxed">
        <h1 className="text-4xl font-black text-slate-900 mb-8">
          Cancellation Policy
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-2xl text-blue-900">
          <p className="font-bold">Standard Rule:</p>
          <p>
            Free cancellation is available for all trips up to 48 hours before
            the scheduled departure time.
          </p>
        </div>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              1. Refund Schedule
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>More than 48 hours notice:</strong> 100% Refund.
              </li>
              <li>
                <strong>24 to 48 hours notice:</strong> 50% Refund.
              </li>
              <li>
                <strong>Less than 24 hours notice:</strong> No Refund.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              2. How to Cancel
            </h2>
            <p>
              To cancel a trip, please log in to your account, go to "My
              Bookings," and select the cancel option. Alternatively, contact
              our 24/7 support team.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              3. Weather-Related Cancellations
            </h2>
            <p>
              In the event of extreme weather conditions, we may cancel a trip
              for your safety. In such cases, you will receive a full refund or
              a credit for a future trip.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
