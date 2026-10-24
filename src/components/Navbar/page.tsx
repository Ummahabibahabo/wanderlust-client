"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarPage = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex gap-5 font-medium text-[16px]">
        <li
          className={
            pathname === "/home"
              ? "text-[#15A1BF] underline decoration-1 underline-offset-4"
              : ""
          }
        >
          <Link href={"/home"}>Home</Link>
        </li>
        <li
          className={
            pathname === "/destinations"
              ? "text-[#15A1BF] underline decoration-1 underline-offset-4"
              : ""
          }
        >
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li
          className={
            pathname === "/my-bookings"
              ? "text-[#15A1BF] underline decoration-1 underline-offset-4"
              : ""
          }
        >
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
        <li
          className={
            pathname === "/admin"
              ? "text-[#15A1BF] underline decoration-1 underline-offset-4"
              : ""
          }
        >
          <Link href={"/admin"}>Admin</Link>
        </li>
      </ul>
      <div className="font-extrabold text-[#15A1BF]">Wanderlast</div>
      <div className="flex items-center gap-5 text-[16px]">
        <Link
          className={
            pathname === "/profile"
              ? "text-[#15A1BF] underline decoration-1 underline-offset-4"
              : ""
          }
          href={"/profile"}
        >
          <div>
            <p>Profile</p>
          </div>
        </Link>

        <Link
          className={
            pathname === "/login"
              ? "text-[#15A1BF] underline decoration-1 underline-offset-4"
              : ""
          }
          href={"/login"}
        >
          <button>Login</button>
        </Link>

        <Link
          className={
            pathname === "/signup"
              ? "text-[#15A1BF] underline decoration-1 underline-offset-4"
              : ""
          }
          href={"/signup"}
        >
          <button>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarPage;
