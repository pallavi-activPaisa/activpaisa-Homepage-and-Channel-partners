import CardOurProduct from "./CardOurProduct";
import Image from "next/image";

const OurProductList = () => {
  return (
    <div>
      <div
        className="flex gap-[20px] mt-[24px] mb-[24px] "
        style={{ width: "100%" }}
      >
        <CardOurProduct
          title="Personal Loan"
          description="Quick personal loans with competitive interest rates and flexible repayment terms"
        />
        <CardOurProduct
          title="Home Loan"
          description="Make your dream home a reality with flexible home loan solutions"
        />
        <CardOurProduct
          title="Professional Loan"
          description="Access tailored loan options to power your professional growth"
        />
        <div style={{ width: "95px" }}>
          <CardOurProduct
            title="Personal Loan"
            description="Quick personal loans with competitive interest rates and flexible repayment terms"
          />
        </div>
      </div>
      <div className="pl-[1174px]">
        <div className="flex gap-[18px]">
          <div
            className="flex w-[36px] h-[36px] pt-[6px] pr-[6.5px] pb-[6px] pl-[5.5px]
            justify-center items-center rounded-[24px] bg-[#F3F4F6]"
          >
            <Image
              src="/Icons/cheveron-right.svg"
              alt="arrow icon"
              width={16}
              height={16}
            />
          </div>
          <div className="flex w-[36px] h-[36px] p-[6px] justify-center items-center rounded-[24px] bg-[#E5E7EB]">
            <img
              src="/Icons/cheveron-rightSS.svg"
              alt="arrow"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductList;
