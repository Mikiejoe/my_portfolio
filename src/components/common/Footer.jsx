function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-500 dark:bg-gray-900 text-white py-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300 dark:text-gray-400">
              © {year} Joseph Omondi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
