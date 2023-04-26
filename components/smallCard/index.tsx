import Image from "next/image";

type SmallCardDataType = {
  image: string;
  title: string;
  desc: string;
};

const SmallCard = ({ image, title, desc }: SmallCardDataType) => {
  return (
    <div className="bg-rellenos w-full h-full rounded-lg p-5">
      <div className="relative w-14 h-14">
        <Image src={image} alt="logo" fill style={{ objectFit: "contain" }} />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-1">{desc}</p>
    </div>
  );
};

export default SmallCard;
