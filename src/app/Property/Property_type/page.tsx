"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function PropertyTypes() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-20">
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Explore Your Dream Residence{" "}
          </h1>

          {/* Property Type 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16  gap-10">
            <div className="w-full md:w-1/2 md:pr-8">
              <Image
                src="/Image/hero_bg_1.jpg"
                alt="Apartment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Apartment
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Far, far away, beyond the towering word mountains and situated
                far from the lands of Vokalia and Consonantia, there exists a
                realm inhabited by blind texts. These texts live in a remote and
                secluded area called Bookmarksgrove, nestled right along the
                expansive coast of Semantics, a vast and endless ocean of
                language.Far, far away, beyond the towering word mountains and
                situated far from the lands of Vokalia and Consonantia, there
                exists a realm inhabited by blind texts.{" "}
              </p>
              <Link
                href={`/Property/Property_type/apartment`}
                className="mt-6 bg-indigo-900 hover:bg-blue text-white font-bold py-4 px-4 rounded-md transition duration-300"
              >
                Explore Apartments
              </Link>
            </div>
          </div>

          {/* Property Type 2 */}
          <div className="flex flex-col  items-center mb-16 md:flex-row-reverse gap-10">
            <div className="w-full md:w-1/2 md:pl-8">
              <Image
                src="/Image/hero_bg_2.jpg"
                alt="Villa"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Villa
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Far, far away, beyond the towering word mountains and situated
                far from the lands of Vokalia and Consonantia, there exists a
                realm inhabited by blind texts. These texts live in a remote and
                secluded area called Bookmarksgrove, nestled right along the
                expansive coast of Semantics, a vast and endless ocean of
                language.Far, far away, beyond the towering word mountains and
                situated far from the lands of Vokalia and Consonantia, there
                exists a realm inhabited by blind texts.{" "}
              </p>
              <Link
                href={`/Property/Property_type/villa`}
                className="mt-6 bg-indigo-900 hover:bg-blue text-white font-bold py-4 px-4 rounded-md transition duration-300"
              >
                Explore Villas
              </Link>
            </div>
          </div>

          {/* Property Type 3 */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-10">
            <div className="w-full md:w-1/2 md:pr-8">
              <Image
                src="/Image/hero_bg_3.jpg"
                alt="Commercial Space"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Commercial Space
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Far, far away, beyond the towering word mountains and situated
                far from the lands of Vokalia and Consonantia, there exists a
                realm inhabited by blind texts. These texts live in a remote and
                secluded area called Bookmarksgrove, nestled right along the
                expansive coast of Semantics, a vast and endless ocean of
                language.Far, far away, beyond the towering word mountains and
                situated far from the lands of Vokalia and Consonantia, there
                exists a realm inhabited by blind texts.{" "}
              </p>
              <Link
                href={`/Property/Property_type/commercial`}
                className="mt-6 bg-indigo-900 hover:bg-blue text-white font-bold py-4 px-4 rounded-md transition duration-300"
              >
                Explore Commercial Spaces
              </Link>
            </div>
          </div>

          {/* Property Type 4 */}
          <div className="flex flex-col  items-center mb-16 md:flex-row-reverse gap-10">
            <div className="w-full md:w-1/2 md:pl-8">
              <Image
                src="/Image/hero_bg_4.jpg"
                alt="Penthouse"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Penthouse
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Far, far away, beyond the towering word mountains and situated
                far from the lands of Vokalia and Consonantia, there exists a
                realm inhabited by blind texts. These texts live in a remote and
                secluded area called Bookmarksgrove, nestled right along the
                expansive coast of Semantics, a vast and endless ocean of
                language.Far, far away, beyond the towering word mountains and
                situated far from the lands of Vokalia and Consonantia, there
                exists a realm inhabited by blind texts.{" "}
              </p>
              <Link
                href={`/Property/Property_type/penthouses`}
                className="mt-6 bg-indigo-900 hover:bg-blue text-white font-bold py-4 px-4 rounded-md transition duration-300 "
              >
                Explore Penthouses
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
