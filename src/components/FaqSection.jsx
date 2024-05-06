import React, { useState } from 'react';
import {RiArrowDropRightLine} from "react-icons/ri"
import {MdKeyboardArrowDown } from "react-icons/md"

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border bg-gray-200 border-gray-200">
      <button
        className="flex justify-between items-center w-full p-5 text-left"
        onClick={toggleOpen}
      >
        <span className="font-medium text-[#189A59]">{question}</span>
        {isOpen ? <MdKeyboardArrowDown className="w-5 h-5" /> : <RiArrowDropRightLine className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="pb-5 px-5">
          <p className="text-[#189A59]">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: 'What is your product/service all about? ', answer: "Quick Filler provides innovative gas filling solutions for both cooking gas and petrol. Users can order cooking gas cylinders for delivery to their homes or locate nearby Quick Filler gas stations for filling up their vehicle's petrol tanks."},
    { question: 'How does your product/service work?', answer: 'Users can access the Quick Filler platform via the website or mobile app. For cooking gas, users can place orders for gas cylinders and schedule delivery times. For petrol, users can locate nearby Quick Filler gas stations, fill up their tanks, and make payments securely using XRP cryptocurrency.' },
    { question: ' What are the key features and benefits of your product/service?', answer: 'Key features include: - Gas delivery services for cooking gas cylinders.  - Petrol filling at Quick Filler gas stations.  - Secure and efficient payments using XRP cryptocurrency.  - Rewards program for customer loyalty.  - Eco-friendly initiatives to promote sustainability.' },
    { question: 'How can customers get in touch with you for support or inquiries?', answer: 'Customers can reach out to Quick Filler for support or inquiries through various channels, including email, phone, live chat support, and social media channels.' },
    { question: 'What is your return/refund policy?', answer: "Quick Filler's return/refund policy may vary based on the specific circumstances of each transaction. Customers are encouraged to contact Quick Filler's customer support team for assistance with returns or refunds." },
    { question: 'Are there any special offers or discounts available? ', answer: 'Quick Filler may offer special promotions, discounts, or rewards for its customers. Users can stay informed about these offers by checking the Quick Filler website or subscribing to email newsletters.' },
    { question: 'How long does it take to receive a product or service?', answer: 'The time to receive a product or service from Quick Filler may vary depending on factors such as location, delivery method, and availability. Users can expect timely delivery for gas orders and efficient service at Quick Filler gas stations.' },
    { question: 'Can customers track their orders?', answer: 'Yes, customers can track their gas orders or transactions through the Quick Filler platform. Users receive notifications and updates on the status of their orders, providing visibility and peace of mind throughout the process.' },
    { question: 'Is there a warranty for your product/service?', answer: "Quick Filler may offer warranties or guarantees for certain products or services, depending on the terms and conditions of each transaction. Customers are encouraged to review warranty information and contact Quick Filler's customer support for assistance if needed." },

  ];

  return (
    <div className="bg-white text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="space-y-4 bg text-[#189A59]">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
