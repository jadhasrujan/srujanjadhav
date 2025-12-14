import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faEnvelope,
    title: "Email",
    description: "jsrujan288@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl transition-colors duration-300 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-700/50"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238] dark:text-gray-100 transition-colors duration-300">
                Get in Touch
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark dark:text-gray-400 transition-colors duration-300">
                I'm currently open for freelance projects and opportunities.
                Feel free to reach out via email or connect with me on social media.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-start gap-8 items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center dark:text-white transition-colors duration-300">
              Get in Touch
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
