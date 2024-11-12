
import React from 'react';
import OrangeButton from '@/components/Buttons/orangeButton';

const DonationSuccessPage: React.FC = () => {
  return (
    <div className="">
      <main className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-red-600 mb-4 text-center">Donation Canceled</h1>
          <p className="text-gray-700 mb-6 text-center">
            Your donation process was canceled. If this was a mistake or if you would like to try again, please revisit the donation page.
          </p>
          <div className="flex justify-center">
            <OrangeButton label="Go to Donation Page" url="/get-involved/donate" />
          </div>
        </div>
      </main>
    </div >
  );
};

export default DonationSuccessPage;
