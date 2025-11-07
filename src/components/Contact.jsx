import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import Swordman from "../assets/swordman.webp";

const ImageClipBox = ({ src, clipClass, alt = "" }) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src={Swordman}
            clipClass="sword-man-clip-path md:scale-125"
            alt="swordman"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="let&#39;s w<b>o</b>rk together "
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/* Contact form (Name, Email, Message) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-2xl mt-8 px-6"
          >
            <div className="grid grid-cols-1 gap-6">
              <label className="flex flex-col text-sm text-neutral-400">
                <span className="mb-2 text-xs text-neutral-500">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="bg-transparent border-b border-neutral-700 py-2 text-blue-50 placeholder:text-neutral-600 outline-none"
                />
              </label>

              <label className="flex flex-col text-sm text-neutral-400">
                <span className="mb-2 text-xs text-neutral-500">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="bg-transparent border-b border-neutral-700 py-2 text-blue-50 placeholder:text-neutral-600 outline-none"
                />
              </label>

              <label className="flex flex-col text-sm text-neutral-400">
                <span className="mb-2 text-xs text-neutral-500">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-b border-neutral-700 py-2 text-blue-50 placeholder:text-neutral-600 outline-none resize-y"
                />
              </label>
            </div>

            {/* keep existing button below the form */}
            <div className="mt-8 flex justify-center">
              <Button title="contact me" containerClass="cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
