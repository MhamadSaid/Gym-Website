import React from "react";
import img from "../assets/img.jpg";
const Plans = () => {
  const gymPlans = [
    {
      title: "Starter Plan",
      price: "$19.99",
      features: ["Basic gym equipment access"],
      Picture: img,
    },
    {
      title: "Family Plan",
      price: "$129.99",
      features: [
        "Full gym access for the entire family",
        "Group fitness classes",
      ],
      Picture: img,
    },
    {
      title: "Corporate Plan",
      price: "$199.99",
      features: [
        "VIP corporate membership",
        "Unlimited access to all facilities",
        "Corporate wellness programs",
      ],
      Picture: img,
    },
    {
      title: "Silver Plan",
      price: "$39.99",
      features: ["Access to gym equipment", "Group fitness classes"],
      Picture: img,
    },
    {
      title: "Gold Plan",
      price: "$69.99",
      features: [
        "Full gym access",
        "Nutritional guidance",
        "All fitness classes",
      ],
      Picture: img,
    },
    {
      title: "Platinum Plan",
      price: "$149.99",
      features: [
        "VIP treatment",
        "Unlimited access to all facilities",
        "Personalized training sessions",
      ],
      Picture: img,
    },
  ];

  return (
    <section className="plan w-screen h-screen mb-64" id="plans">
      <div className="container mx-auto">
        <div className="flex flex-col  lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 mb-20">
          <div className="flex-1 h-[600px] mt-20">
            <h2 className="h2 text-accent">Our Plans</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-8">
              {gymPlans.map((plan, index) => (
                <div key={index} className="p-6 rounded-lg shadow-2xl">
                  <figure>
                    <img src={plan.Picture} alt="Shoes" />
                  </figure>
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
        </div>
      </div>
    </section>
  );
};

export default Plans;
