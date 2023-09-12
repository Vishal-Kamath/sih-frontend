import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="px-3vw py-12 w-full flex justify-between border-gray-300 bg-gray-100 border-1">
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((item) => (
          <span key={item}>items {item}</span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((item) => (
          <span key={item}>items {item}</span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((item) => (
          <span key={item}>items {item}</span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((item) => (
          <span key={item}>items {item}</span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((item) => (
          <span key={item}>items {item}</span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
