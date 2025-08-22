import { mySocials } from "../constants";

export const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between pb-3 gap-5 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>
          <a href="#" className="underline">
            Terms of Service
          </a>
        </p>
        <p>|</p>
        <p>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.icon} alt={social.name} className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p>© 2025 Yash Srivastava. All rights reserved.</p>
    </section>
  );
};
