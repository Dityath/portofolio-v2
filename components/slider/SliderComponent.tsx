import Slider from "@ant-design/react-slick";
import Image from "next/image";

type galleryType = { galleryContent: { img: string; desc: string }[] };

const SliderComponent = ({ galleryContent }: galleryType) => {
  return (
    <div className="w-[50vw]">
      <Slider
        {...{
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "",
        }}
      >
        {galleryContent.map((value, index) => (
          <div className="flex flex-col" key={index}>
            <div className="w-full h-96">
              <Image
                src={value.img}
                alt="Motion Website"
                width={1000}
                height={200}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bg-rellenos/80 z-20">{value.desc}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
