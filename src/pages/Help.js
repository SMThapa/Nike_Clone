import { useState } from "react"
import { NavLink } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Help = () => {

  useTitle('Help - NIKE')

  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const [q6, setQ6] = useState(false);
  const [q7, setQ7] = useState(false);

  return (
    <div className="theContainer sm:mt-20 sm:px-5 lg:px-20 mt-12 sm:pb-40">
      <div className="sm:p-5">
        <div className="py-4">
          <h1 className="sm:text-2xl text-xl font-bold sm:mb-8 mb-4">GET HELP</h1>
          <h1 className="sm:text-xl font-bold text-lg">QUICK ASSISTS</h1>
          <p className="max-sm:text-xs">Answers to our most frequently asked questions are just one click away.</p>
        </div>
        <div className="sm:py-6 py-3">
          <div className="border-b border-gray-300 py-4">
            <div onClick={()=>setQ1(!q1)} className="sm:text-xl sm:py-2 flex justify-between cursor-pointer">
              <h1>CAN MY NIKE ORDER BE DISPATCHED INTERNATIONALLY?</h1>
              {q1 && <i className="bi bi-chevron-up"></i>}
              {!q1 && <i className="bi bi-chevron-down"></i>}
            </div>
            <p className={`${q1?'':'hidden'} sm:pl-2 py-4 text-gray-600 `}>
              We don't deliver internationally to addresses outside of the country or region where you place your order. 
              But you can shop Nike in a number of locations globally.
              We cannot deliver to PO boxes, Nike stores, reshippers or package-forwarding services.
            </p>
          </div>

          <div className="border-b border-gray-300 py-4">
            <div onClick={()=>setQ2(!q2)} className="sm:text-xl sm:py-2 flex justify-between cursor-pointer">
              <h1>HOW DO I RETURN MY NIKE ORDER?</h1>
              {q2 && <i className="bi bi-chevron-up"></i>}
              {!q2 && <i className="bi bi-chevron-down"></i>}
            </div>
            <div className={`${q2?'':'hidden'} sm:pl-2 py-4 text-gray-600 `}>
              <p>You can return Nike.com and Nike App orders within 30 days.</p>
              <p className="text-sm pb-2">*Simply follow the steps below to send your order back. And remember, we'll cover delivery fees for Nike Members.</p>
              <div className="text-gray-700">
                <p>1.Click the button below. Select your order and click the <span className="text-black text-bold">"Start Return"</span> button.</p>
                <p>2.Enter your return information. When prompted, have your return label emailed to you.</p>
                <p>3.Package your return securely, enclose any forms you received and attach the return label.</p>
                <p>4.Hand your return to the agent at the appointed time and location. Unattended returns won't be collected—someone must be present to hand over the return.</p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 py-4">
            <div onClick={()=>setQ3(!q3)} className="sm:text-xl sm:py-2 flex justify-between cursor-pointer">
              <h1>WHERE IS MY NIKE ORDER?</h1>  
              {q3 && <i className="bi bi-chevron-up"></i>}
              {!q3 && <i className="bi bi-chevron-down"></i>}
            </div>
            <div className={`${q3?'':'hidden'} sm:pl-2 py-4 text-gray-600 `}>
              <p className="mb-4">
                The most accurate and current information for your Nike order is always available at <span className="text-black underline cursor-pointer">Nike.com/orders</span>. 
                To check your order status, you'll need your order number and email address. Nike Members can also sign in 
                to access their order information.
              </p>
              <NavLink to="/dashboard" className="border rounded-full bg-black text-white text-sm py-2 px-3" >Check Your Order History</NavLink>
              <p className="mt-4">
                After your order is dispatched, you can track your package(s) any time at Nike.com/orders. 
                We'll also send you a delivery confirmation email with your tracking number and a link to track your package.
              </p>
            </div>
          </div>

          <div className="border-b border-gray-300 py-4">
            <div onClick={()=>setQ4(!q4)} className="sm:text-xl sm:py-2 flex justify-between cursor-pointer">
              <h1>CAN I CANCEL OR CHANGE MY NIKE ORDER?</h1>
              {q4 && <i className="bi bi-chevron-up"></i>}
              {!q4 && <i className="bi bi-chevron-down"></i>}
            </div>
            <div className={`${q4?'':'hidden'} sm:pl-2 py-4 text-gray-600 `}>
              <p>
                You can't make changes, but you can cancel an order within 30 minutes of placing it.
                To cancel an order, first go to your orders page. 
              </p>

              <p>
                If you're not signed in, you'll need to enter the order number from your confirmation email, along with your email address. 
                Next, open the order you want to cancel, then tap or click the "Cancel" button and follow the prompts.
              </p>
              <p className="mb-3">
                If you don't see the cancel button, it has been more than 30 minutes since your order was placed, 
                and it can no longer be cancelled. But don't worry—you can return the items within 30 days.
              </p>
              <NavLink to="/dashboard" className="border rounded-full bg-black text-white text-sm py-2 px-3" >Visit Order Page</NavLink>
            </div>
          </div>

          <div className="border-b border-gray-300 py-4">
            <div onClick={()=>setQ5(!q5)} className="sm:text-xl sm:py-2 flex justify-between cursor-pointer">
              <h1>HOW DO I FIND THE RIGHT SIZE AND FIT?</h1>
              {q5 && <i className="bi bi-chevron-up"></i>}
              {!q5 && <i className="bi bi-chevron-down"></i>}
            </div>
            <div className={`${q5?'':'hidden'} sm:pl-2 py-4 text-gray-600 `}>
              <p>
                When it comes to performance, fit matters. We'll help you find the right shoes and gear in the right size so you can 
                perform at your best.
              </p>
              <p>
                Not sure what Nike size you wear? Our size charts can help you determine the best fit for all of our shoes, 
                clothing and gear. You can navigate to our size charts below, including size charts for men, women, kids, unisex i
                tems and accessories. You can also find links to the appropriate size chart on all of our product pages.
              </p>
              
            </div>
          </div>

          <div className="border-b border-gray-300 py-4">
            <div onClick={()=>setQ6(!q6)} className="sm:text-xl sm:py-2 flex justify-between cursor-pointer">
              <h1>DO NIKE SHOES HAVE A WARRANTY?</h1>
              {q6 && <i className="bi bi-chevron-up"></i>}
              {!q6 && <i className="bi bi-chevron-down"></i>}
            </div>
            <p className={`${q6?'':'hidden'} sm:pl-2 py-4 text-gray-600 `}>
              We stand behind all of our shoes and gear. If your Nike shoes or apparel have a material or workmanship fault, we want to make it right and get you back in the game. 
              Please refer to your method of purchase below for more information.
            </p>
          </div>

          <div className="border-b border-gray-300 py-4">
            <div onClick={()=>setQ7(!q7)} className="sm:text-xl sm:py-2 flex justify-between cursor-pointer">
              <h1>HOW DO I BECOME A NIKE MEMBER?</h1>
              {q7 && <i className="bi bi-chevron-up"></i>}
              {!q7 && <i className="bi bi-chevron-down"></i>}
            </div>
            <div className={`${q7?'':'hidden'} sm:pl-2 py-4 text-gray-600 `}>
              <p className="mb-3">
                Becoming a Nike Member is the best way to access everything Nike and it's free, fast and easy to join. 
                You can join online or when you download any of the Nike Apps. And you'll enjoy immediate benefits.
                To join us as a Member, use the button below and simply fill in the required fields.
              </p>
              <NavLink to="/register" className="border rounded-full bg-blue-500 text-white text-sm py-2 px-5" >JOIN US</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:pb-20 py-8">
        <h1 className="sm:text-2xl text-xl font-bold sm:px-5 sm:py-8">CONTACT US</h1>
        <div className="flex justify-between max-sm:items-center max-sm:flex-col sm:px-8 py-2 w-full">
          <div className="flex flex-col items-center sm:w-1/4  w-1/2 max-sm:py-4">
            <i className="bi bi-phone sm:my-3"></i>
            <div className="text-center">
              <p>000 800 919 0566</p>
              <p className="text-gray-500">Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:w-1/4  w-1/2 max-sm:py-4">
            <i className="bi bi-chat-left-dots-fill sm:my-3"></i>
            <div className="text-center">
              <p>24 hours a day</p>
              <p className="text-gray-500">7 days a week</p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:w-1/4  w-1/2 max-sm:py-4">
            <i className="bi bi-envelope-fill sm:my-3"></i>
            <p>We'll reply within</p>
            <p className="text-gray-500">five business days</p>
          </div>
          <div className="flex flex-col items-center sm:w-1/4  w-1/2 max-sm:py-4">
            <i className="bi bi-geo-alt-fill sm:my-3"></i>
            <div className="text-center">
              <p className="text-lg">STORE LOCATOR</p>
              <p className="text-gray-500">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
