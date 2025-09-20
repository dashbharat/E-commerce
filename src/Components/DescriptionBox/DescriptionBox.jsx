import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce site is an online platform that enables customers to
          browse, select, and purchase products or services conveniently from
          anywhere. It offers features like product listings, secure payments,
          order tracking, and customer support. E-commerce enhances shopping
          experiences by providing accessibility, variety, and seamless
          transactions, making buying and selling easier worldwide.
        </p>
        <p>
          E-commerce websites revolutionize modern shopping by offering
          personalized recommendations, discounts, and 24/7 availability. They
          connect businesses with customers globally, ensuring convenience,
          efficiency, and trust. User-friendly interfaces, fast delivery, and
          multiple payment options make online shopping a preferred choice. 👉
          (This adds **30 new words**.)
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
