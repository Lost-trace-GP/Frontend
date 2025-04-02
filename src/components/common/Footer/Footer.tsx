import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 ">
      <div className="mx-auto   px-4">
        <p className="text-lg font-semibold">💙 You Are Not Alone 💙</p>
        <p className="mt-2 text-sm">
          Every missing person is someones family, someones friend, someones
          whole world. If you are searching, <strong>never lose hope</strong>.
          If you have found someone, <strong>help others do the same</strong>.
          Together, we bring people home.
        </p>
        <p className="mt-4 text-xs opacity-75">
          © {new Date().getFullYear()} Lost Trace | Reuniting families, one
          search at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
