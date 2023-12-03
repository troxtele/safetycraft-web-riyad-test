import GalleryImage1 from "@/assets/img/gallery/galleryimage1.webp";
import GalleryImage2 from "@/assets/img/gallery/galleryimage2.webp";
import GalleryImage3 from "@/assets/img/gallery/galleryimage3.webp";
import GalleryImage4 from "@/assets/img/gallery/galleryimage4.webp";
import GalleryImage5 from "@/assets/img/gallery/galleryimage5.webp";
import GalleryImage6 from "@/assets/img/gallery/galleryimage6.webp";
import GalleryImage7 from "@/assets/img/gallery/galleryimage7.webp";
import GalleryImage8 from "@/assets/img/gallery/galleryimage8.webp";
import GalleryImage9 from "@/assets/img/gallery/galleryimage9.webp";
import GalleryImage10 from "@/assets/img/gallery/galleryimage10.webp";

const Gallery = () => {
  const galleryImages = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
    GalleryImage10,
  ];

  return (
    <>
      <div className="bg-white">
        {/* CENTERED SUBTITLE AND TITTLE TEXT */}
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="font-title text-2xl font-bold text-primary-900 lg:text-5xl">#BESAFETY</h1>
          <h2 className="font-rubik lg:text-SM text-xs font-extrabold text-black">OWNERS CONTENT</h2>
          <div className="mt-4 flex space-x-5 sm:mt-5 sm:justify-center">
            {/* <a href="/" target="_blank" className="text-gray-800 hover:text-primary-700">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <title>Facebook</title>
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                fill="currentColor"
              ></path>
            </svg>
          </a> */}
            <a
              href="https://www.instagram.com/safetycraft.official/"
              target="_blank"
              className="text-gray-800 hover:text-gray-900 dark:hover:text-primary-700"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                <title>Instagram</title>
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            {/* <a href="/" target="_blank" className="text-gray-800 hover:text-gray-900 dark:hover:text-primary-700">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <title>YouTube</title>
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a href="/" target="_blank" className="text-gray-800 hover:text-gray-900 dark:hover:text-primary-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                d="M20.447,20.452H16.893V14.883c0-1.328-.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h.046a3.745,3.745,0,0,1,3.37-1.85c3.6,0,4.267,2.37,4.267,5.455v6.286ZM5.337,7.433A2.064,2.064,0,1,1,7.4,5.368,2.062,2.062,0,0,1,5.337,7.433ZM7.119,20.452H3.555V9H7.119ZM22.225,0H1.771A1.75,1.75,0,0,0,0,1.729V22.271A1.749,1.749,0,0,0,1.771,24H22.222A1.756,1.756,0,0,0,24,22.271V1.729A1.756,1.756,0,0,0,22.222,0Z"
                fill="currentColor"
              ></path>
            </svg>
          </a> */}
          </div>
        </div>
        <div className="ex:grid-cols-2 grid gap-2 px-6 pb-20 sm:grid-cols-2 sm:px-0 md:grid-cols-4 lg:grid-cols-5">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-md shadow-xl">
              <img
                width={500}
                height={500}
                className="over h-auto max-w-full scale-100 transition-all  duration-300 hover:scale-110"
                src={image}
                alt={`gallery-image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
