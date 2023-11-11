import React from 'react';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 m-4">
      <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
      <h3 className="text-xl mb-4">{plan.price}</h3>
      <ul className="mb-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
    </div>
  );
};

export default PricingCard;