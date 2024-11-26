import React from "react";
import { ArrowRight } from "lucide-react";
import p1 from "../../assets/plainproducts/wildforesthoney.png";
import p2 from "../../assets/plainproducts/dryfruitsh.png";
import p3 from "../../assets/plainproducts/fighoney.jpg";
import p4 from "../../assets/plainproducts/moringahoney.png";

const ProductRedirect = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Sweet Treasures Await
        </h1>
        <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Each jar tells a story of nature's finest craftsmanship
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-honey-normal rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative">
              <div className="h-full">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div
                    className="relative rounded-lg overflow-hidden"
                    style={{
                      paddingBottom: "87.99%",
                    }}
                  >
                    <img
                      src={p1}
                      alt="Honey Product 1"
                      className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 bg-white"
                    />
                  </div>
                  <div
                    className="relative rounded-lg overflow-hidden"
                    style={{ paddingBottom: "87.99%" }}
                  >
                    <img
                      src={p2}
                      alt="Honey Product 2"
                      className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 bg-white"
                    />
                  </div>
                  <div
                    className="relative rounded-lg overflow-hidden"
                    style={{ paddingBottom: "87.99%" }}
                  >
                    <img
                      src={p3}
                      alt="Honey Product 3"
                      className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 bg-white"
                    />
                  </div>
                  <div
                    className="relative rounded-lg overflow-hidden"
                    style={{ paddingBottom: "87.99%" }}
                  >
                    <img
                      src={p4}
                      alt="Honey Product 4"
                      className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  Discover Our Pure Honey Products
                </h2>

                <div className="h-1 w-24 bg-white rounded-full"></div>

                <p className="text-lg text-white">
                  Explore our range of 100% pure and natural honey products.
                  From traditional wild honey to specialized varieties, each
                  product is crafted with care and authenticity.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p className="text-white">Premium Raw Honey</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p className="text-white">Organic Wild Honey</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p className="text-white">Specialty Honey Varieties</p>
                  </div>
                </div>

                <a
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg text-amber-600 hover:text-amber-700 font-semibold group transition-colors"
                >
                  View Our Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRedirect;
