import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYaer = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYaer} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
