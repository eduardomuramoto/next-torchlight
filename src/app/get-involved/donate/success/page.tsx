// "use client"
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";


// const DonationSuccessPage = () => {
//   const session_id = useSearchParams().get("session_id");
//   const [session, setSession] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!session_id) return;

//     const fetchSession = async () => {
//       try {
//         const response = await fetch(`/api/donation-checkout-session/${session_id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch session data");
//         }
//         const data = await response.json();
//         setSession(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching session:", error);
//         setLoading(false);
//       }
//     };

//     fetchSession();
//   }, [session_id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!session) {
//     return <p>Error: Could not retrieve session data.</p>;
//   }
//   return (
//     <div className="w-full bg-lightBackground flex flex-col items-center justify-center p-16 px-6 lg:px-20">
//       <h1 className="font-teko text-6xl uppercase font-semibold pb-6 text-background">Thank You, {session.customer_details.name}, for Your Donation!</h1>
//       <p className="font-teko text-4xl pb-6 text-background">Your donation of ${session.amount_total / 100} has been successfully processed.</p>
//       <p className="font-teko text-2xl pb-6 text-background">If you have any questions, please contact us.</p>
//     </div>
//   );
// };

// export default DonationSuccessPage;
