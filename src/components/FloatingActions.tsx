import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed right-4 bottom-4 sm:right-5 sm:bottom-5 md:right-6 md:bottom-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/27106342629"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 touch-manipulation"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </a>
      
      {/* Call Button */}
      <a
        href="tel:+27106342629"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent hover:bg-accent/90 active:bg-accent/80 text-accent-foreground rounded-full shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 touch-manipulation"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </a>
    </div>
  );
};

export default FloatingActions;

