import React from "react";

const Plans = () => {
  const gymPlans = [
    {
      title: "Starter Plan",
      price: "$19.99",
      features: ["Basic gym equipment access"],
    },
    {
      title: "Family Plan",
      price: "$129.99",
      features: [
        "Full gym access for the entire family",
        "Group fitness classes",
      ],
    },
    {
      title: "Corporate Plan",
      price: "$199.99",
      features: [
        "VIP corporate membership",
        "Unlimited access to all facilities",
        "Corporate wellness programs",
      ],
    },
    {
      title: "Silver Plan",
      price: "$39.99",
      features: ["Access to gym equipment", "Group fitness classes"],
    },
    {
      title: "Gold Plan",
      price: "$69.99",
      features: [
        "Full gym access",
        "Nutritional guidance",
        "All fitness classes",
      ],
    },
    {
      title: "Platinum Plan",
      price: "$149.99",
      features: [
        "VIP treatment",
        "Unlimited access to all facilities",
        "Personalized training sessions",
      ],
    },
  ];

  return (
    <section id="plans" className="plans-section mt-5 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#f35903] mb-8">Our Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gymPlans.map((plan, index) => (
            <div key={index} className="p-6 rounded-lg shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-[#f35903]">
                {plan.title}
              </h3>
              <p className="text-[#f35903] text-lg font-bold mb-4">
                {plan.price}
              </p>
              <ul className="list-disc ml-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-white">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 btn btn-md transition-all">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
