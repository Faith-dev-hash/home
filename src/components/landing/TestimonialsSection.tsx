import React, { useState } from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, avatar }) => {
  return (
    <article className="border self-stretch min-w-60 overflow-hidden w-[402px] my-auto px-[22px] py-8 rounded-[20px] border-solid border-[#E0E0E0] max-md:px-5">
      <blockquote className="text-[#097484] text-base font-normal leading-6">
        {quote}
      </blockquote>
      <div className="flex w-full items-center gap-4 mt-10">
        <div className="self-stretch flex items-center gap-4 flex-1 shrink basis-[0%] my-auto">
          <img
            src={avatar}
            alt={`${name} profile picture`}
            className="aspect-[1] object-contain w-[60px] self-stretch shrink-0 my-auto rounded-[100px]"
          />
          <div className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
            <div className="text-[#097484] text-xl font-medium">
              {name}
            </div>
            <div className="text-[#6A6C6B] text-lg font-normal">
              {role}
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-0.5 my-auto" role="img" aria-label="5 star rating">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/85e6793790c808534406f93a9e34e544907da47f?placeholderIfAbsent=true"
              alt=""
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          ))}
          <img
            src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/621e208e29a2ab0ab98a4fe4d0449983e6e3a56f?placeholderIfAbsent=true"
            alt=""
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/85e6793790c808534406f93a9e34e544907da47f?placeholderIfAbsent=true"
            alt=""
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          />
        </div>
      </div>
    </article>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "VonTech Group enabled my start-up company to rapidly scale our operations and bring innovative products to the market at a very fast rate.",
      name: "Richard Henry",
      role: "Growing Startup",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/4f1153f72cb453fe4c312ab00083a7f854900d7a?placeholderIfAbsent=true"
    },
    {
      quote: "VonTech Group helped me optimize my company's cloud infrastructure, resulting in significant cost savings and improved efficiency.",
      name: "Daniel Billy",
      role: "Cloud Organisation",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/045ea588f8ed57dc36ad872e7a3d99f12b40acf9?placeholderIfAbsent=true"
    },
    {
      quote: "My financial institution partnered with VonTech Group to implement robust security measures and ensure compliance in their cloud environment.",
      name: "Dora Florence",
      role: "Financial Institution",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/76dede8729494b93ff740f2ac085453836533e90?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="bg-[rgba(242,244,243,1)] z-0 w-full overflow-hidden pt-10 pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-center text-4xl font-bold tracking-[-0.1px] bg-clip-text self-center">
          Client success story
        </h2>
        <div className="flex w-full flex-col items-stretch mt-10 max-md:max-w-full">
          <div className="flex w-full items-center gap-5 justify-center flex-wrap max-md:max-w-full">
            <TestimonialCard
              quote={testimonials[0].quote}
              name={testimonials[0].name}
              role={testimonials[0].role}
              avatar={testimonials[0].avatar}
            />
            <div className="flex gap-5">
              <TestimonialCard
                quote={testimonials[1].quote}
                name={testimonials[1].name}
                role={testimonials[1].role}
                avatar={testimonials[1].avatar}
              />
              <TestimonialCard
                quote={testimonials[2].quote}
                name={testimonials[2].name}
                role={testimonials[2].role}
                avatar={testimonials[2].avatar}
              />
            </div>
          </div>
          <div className="self-center flex items-center gap-1 mt-4" role="tablist" aria-label="Testimonial navigation">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                className={`aspect-[1/1] self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[1000px] transition-colors ${
                  index === currentSlide ? 'bg-[#097484]' : 'bg-[rgba(215,209,209,1)]'
                }`}
                onClick={() => setCurrentSlide(index)}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
