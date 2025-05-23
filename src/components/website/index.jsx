import dynamic from "next/dynamic"
import GSthirdsection from "./GhostWriting/third-section/thirdsection"
import GSfourthsection from "./GhostWriting/fourth-section/GSfourthsection"
import GSfivesection from "./GhostWriting/five-section/GSfivesection"
import Gssixsections from "./GhostWriting/GsSixSection/Gssixsections"
import Gssevensection from "./GhostWriting/GSseven-section/Gssevensection"
import Gseightsection from "./GhostWriting/Gseightsection/Gseightsection"
import GSNinesection from "./GhostWriting/GSNine-section/GSNinesection"
import GSTensection from "./GhostWriting/GSTensection/GSTensection"
import TabSection from "./GhostWriting/TabSection/TabSection"
import TwelveSection from "./GhostWriting/TwelveSection/TwelveSection"
import BPSHomeBanner from "./BookPublishingServices/BPSHomeBanner/BPSHomeBanner"
import BPSServicesDescription from "./BookPublishingServices/BPSServicesDescription/BPSServicesDescription"
import BPSThirdSection from "./BookPublishingServices/BPSThirdSection/BPSThirdSection"
import BPSfourSection from "./BookPublishingServices/BPSfourSection/BPSfourSection"
import BPSFiveSection from "./BookPublishingServices/BPSFiveSection/BPSFiveSection"
import TSHeroBanner from "./TranslationServices/TSHeroBanner/TSHeroBanner"

const Navigation = dynamic(() => import("./Navigation/Navigation"))
const Header = dynamic(() => import("./header/header"))
const HeroBanner = dynamic(() => import("./HeroBanner/HeroBanner"))
const CTA = dynamic(() => import("./CTA/CTA"))
const LogoCarousel = dynamic(() => import("./LogoCarousel/LogoCarousel"))
const Carousel = dynamic(() => import("./Carousel/Carousel"))
const DescrptionSection = dynamic(() =>
  import("./DescrptionSection/DescrptionSection")
)
const Services = dynamic(() => import("./Services/Services"))
const Process = dynamic(() => import("./Process/Process"))
const Bookcaruosel = dynamic(() => import("./BooksCaruosel/Bookcaruosel"))
const Testimonials = dynamic(() => import("./Testimonials/Testimonials"))
const Counter = dynamic(() => import("./Counters/Counter"))
const ContactForm = dynamic(() => import("./ContactForm/ContactForm"))
const AboutBanner = dynamic(() => import("./AboutUs/AboutBanner/AboutBanner"))
const ServiceInclude = dynamic(() =>
  import("./AboutUs/ServiceInclude/ServiceInclude")
)
const LeftCol = dynamic(() => import("./AboutUs/LeftCol/LeftCol"))
const HeroContact = dynamic(() => import("./ContactUs/HeroBanner/HeroContact"))
const HeroBannerGhost = dynamic(() =>
  import("./GhostWriting/HeroBannerGhost/HeroBannerGhost")
)
const ServicesDescription = dynamic(() =>
  import("./GhostWriting/ServicesDescription/ServicesDescription")
)
// Children Book Illustrations Page
const Hero = dynamic(() => import("./children-book-illustrations/Hero"))
const PremiumServices = dynamic(() =>
  import("./children-book-illustrations/PremiumServices")
)
const Portfolio = dynamic(() =>
  import("./children-book-illustrations/Portfolio")
)
const AchievingYourDream = dynamic(() =>
  import("./children-book-illustrations/AchievingYourDream")
)
const StunningIllustrations = dynamic(() =>
  import("./children-book-illustrations/StunningIllustrations")
)
const ContentSec = dynamic(() =>
  import("./children-book-illustrations/ContentSec")
)
const BringABook = dynamic(() =>
  import("./children-book-illustrations/BringABook")
)
const Process2 = dynamic(() => import("./children-book-illustrations/Process"))

// Book Promotion Services Page
const Hero2 = dynamic(() => import("./book-promotion-services/Hero"))
const StrongPresence = dynamic(() =>
  import("./book-promotion-services/StrongPresence")
)
const SocialMediaLogos = dynamic(() =>
  import("./book-promotion-services/SocialMediaLogos")
)
const ReachAudience = dynamic(() =>
  import("./book-promotion-services/ReachAudience")
)
const TakeControl = dynamic(() =>
  import("./book-promotion-services/TakeControl")
)
const AchievementsShowcase = dynamic(() =>
  import("./book-promotion-services/AchievementsShowcase")
)
const AutoPlaySlider = dynamic(() => import("./Sliders/AutoPlaySlider"))
const WhyChoose = dynamic(() => import("./book-promotion-services/WhyChoose"))
const SuccessStories = dynamic(() =>
  import("./book-promotion-services/SuccessStories")
)
const HighlightedServices = dynamic(() =>
  import("./book-promotion-services/HighlightedServices")
)
const FAQs = dynamic(() => import("./book-promotion-services/FAQs"))

// Children Book Services Page
const Hero3 = dynamic(() => import("./children-book-services/Hero"))
const TimelessStories = dynamic(() =>
  import("./children-book-services/TimelessStories")
)
const WorkProcess = dynamic(() =>
  import("./children-book-services/WorkProcess")
)
const VisualAppeal = dynamic(() =>
  import("./children-book-services/VisualAppeal")
)
const VideoTestimonial = dynamic(() =>
  import("./children-book-services/VideoTestimonial")
)
const TakeCare = dynamic(() => import("./children-book-services/TakeCare"))
const UnfinishedDraft = dynamic(() =>
  import("./children-book-services/UnfinishedDraft")
)

export {
  Header,
  Navigation,
  HeroBanner,
  CTA,
  LogoCarousel,
  Carousel,
  DescrptionSection,
  Services,
  Process,
  Bookcaruosel,
  Testimonials,
  Counter,
  ContactForm,
  AboutBanner,
  ServiceInclude,
  LeftCol,
  HeroContact,
  HeroBannerGhost,
  ServicesDescription,
  GSthirdsection,
  GSfourthsection,
  GSfivesection,
  Gssixsections,
  Gssevensection,
  Gseightsection,
  GSNinesection,
  GSTensection,
  TabSection,
  TwelveSection,
  BPSHomeBanner,
  BPSServicesDescription,
  BPSThirdSection,
  BPSfourSection,
  BPSFiveSection,
  TSHeroBanner,
  Hero,
  PremiumServices,
  Portfolio,
  AchievingYourDream,
  StunningIllustrations,
  ContentSec,
  BringABook,
  Process2,
  Hero2,
  StrongPresence,
  SocialMediaLogos,
  ReachAudience,
  TakeControl,
  AchievementsShowcase,
  AutoPlaySlider,
  WhyChoose,
  SuccessStories,
  HighlightedServices,
  FAQs,
  Hero3,
  TimelessStories,
  WorkProcess,
  VisualAppeal,
  VideoTestimonial,
  TakeCare,
  UnfinishedDraft,
}
