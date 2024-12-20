import { Link } from "react-router";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="#" className="mr-6 hidden lg:flex">
            <img src="logo.png" alt="logo" />
            <span className="sr-only">Zaiqa e Pizza</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              to="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              to="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              About
            </Link>
            <Link
              to="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Services
            </Link>
            <Link
              to="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link to="#" className="mr-6 hidden lg:flex">
        <img src="logo.png" alt="logo" className="w-28" />
        <span className="sr-only">Zaiqa e Pizza</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          to="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors   focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
        >
          Home
        </Link>
        <Link
          to="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors   focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
        >
          About
        </Link>
        <Link
          to="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors   focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
        >
          Services
        </Link>
        <Link
          to="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors   focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
