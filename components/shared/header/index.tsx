import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} login`}
              width={48}
              height={48}
            />
            <span className="hidden lg:block font-bold text-zxl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/Cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sing-in">
              <UserIcon /> Sing In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
