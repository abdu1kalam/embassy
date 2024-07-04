import { AddressBar } from "@/components/address-bar";
import { ContactBar } from "@/components/contact-bar";
import ImageSlider from "@/components/image-gallery";
import { InfoBar } from "@/components/info-bar";
import { QuickContact } from "@/components/quick-contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMailForward, faCoffee } from "@fortawesome/free-solid-svg-icons";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <main className="m-0">
      <button className="fixed bottom-[50%] -right-12 z-50 -rotate-90 bg-green-600/90 text-white px-3 py-2 rounded-md hover:bg-green-700/90">
        Quick Contact
      </button>

      <ContactBar />
      <AddressBar />
      <InfoBar />
      <ImageSlider />
      <QuickContact />
      {children}
    </main>
  );
};

library.add(fab, faMailForward, faCoffee);
export default RootLayout;
