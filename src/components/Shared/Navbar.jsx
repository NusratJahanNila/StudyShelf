// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, LogIn, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = () => {
    const loggedIn = document.cookie.includes('studyshelf-auth=true');
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    // Check auth on mount
    checkAuth();
    
    // 🔥 ADD THIS - Listen for auth changes
    window.addEventListener('authChange', checkAuth);
    
    // Also check on route changes
    checkAuth();
    
    return () => {
      window.removeEventListener('authChange', checkAuth);
    };
  }, [pathname]); // 🔥 Add pathname as dependency

  const handleLogout = () => {
    document.cookie = "studyshelf-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    
    // 🔥 Trigger auth change event
    window.dispatchEvent(new Event('authChange'));
    
    Swal.fire({
      title: "Logged out!",
      text: "You have been successfully logged out.",
      icon: "success",
      confirmButtonColor: "#0A5C36",
    });
    
    window.location.href = "/";
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Add Resources", href: "/dashboard/add-resource" }, // 🔥 Fixed: should be singular
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-[#ff7400]" />
            <span className="text-2xl font-bold text-gray-900">
              Study<span className="text-[#ff7400]">Shelf</span>
            </span>
          </Link>

          {/* Navigation Links - Middle */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={isLoggedIn || link.href !== "/dashboard/add-resource" ? link.href : "/login"}
                className={`relative font-bold text-gray-600 hover:text-gray-900 transition-colors duration-300 ${
                  pathname === link.href ? "text-[#0A5C36]" : ""
                }`}
              >
                <span className="relative px-2 py-1">
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A5C36] transform origin-left transition-transform duration-300 ${
                      pathname === link.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* Login/Logout Button - Right */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-[#0A5C36] text-white px-6 py-2 rounded-tl-xl rounded-br-xl hover:bg-[#0a7c46] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="flex items-center space-x-2 bg-[#0A5C36] text-white px-6 py-2 rounded-tl-xl rounded-br-xl hover:bg-[#0a7c46] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;