import styled from "styled-components";
import AboutUs from "../components/about-us";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";

const DesignChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #f0fafd;
  width: 1440px;
  height: 699px;
  display: none;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 1332px;
  left: 920px;
  width: 520px;
  height: 678px;
  opacity: 0.3;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  top: 2810px;
  left: 0px;
  width: 444px;
  height: 678px;
  opacity: 0.3;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  top: 1454px;
  left: 979px;
  width: 461px;
  height: 678px;
  opacity: 0.3;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  top: 3067px;
  left: 0px;
  width: 472px;
  height: 678px;
  opacity: 0.3;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  top: 4083px;
  left: 1026px;
  width: 414px;
  height: 507px;
  opacity: 0.3;
`;
const VectorIcon5 = styled.img`
  position: absolute;
  top: 4148px;
  left: 780px;
  width: 660px;
  height: 442px;
  opacity: 0.3;
`;
const ColorBlurIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 741px;
  height: 523px;
`;
const Image6Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 0px 0px 0px 80px;
  width: 720px;
  height: 720px;
  object-fit: cover;
`;
const KPeoplesChild = styled.img`
  position: relative;
  width: 176px;
  height: 120px;
`;
const KPeople = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 600;
`;
const SuccessfullyGettingHome = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 20px;
  color: var(--mrt-app-subheadline);
`;
const KPeopleParent = styled.div`
  width: 152px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const KPeoples = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--color-white);
  box-shadow: var(--shadow-ig-post);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xl);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const KPeoplesItem = styled.img`
  position: relative;
  border-radius: var(--br-5xl);
  width: 56px;
  height: 56px;
  object-fit: cover;
`;
const Houses = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
`;
const SoldMonthly = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 20px;
  color: var(--mrt-app-subheadline);
`;
const HousesParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const KPeoplesInner = styled.img`
  position: relative;
  border-radius: 50%;
  width: 119px;
  height: 120px;
  object-fit: cover;
`;
const KPeoplesParent = styled.div`
  position: absolute;
  top: 568px;
  left: 48px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ImgChild = styled.img`
  position: absolute;
  top: 139.5px;
  left: 82px;
  width: 525.5px;
  height: 346.5px;
`;
const Img = styled.div`
  position: absolute;
  top: 0px;
  left: 600px;
  width: 907px;
  height: 720px;
`;
const Child = styled.img`
  position: relative;
  border-radius: var(--br-5xl);
  width: 136px;
  height: 136px;
  object-fit: cover;
`;
const ManhattanStyle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 26px;
  font-weight: 500;
`;
const LoremIpsumDolor = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 20px;
  color: var(--mrt-app-subheadline);
`;
const ClaritystarSolidIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Review = styled.div`
  flex: 1;
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const ClaritystarSolidParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const ManhattanStyleParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Div = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--color-white);
  box-shadow: 0px 10px 8px rgba(72, 72, 72, 0.2);
  width: 420px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-13xl) var(--padding-xs)
    var(--padding-xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Recommended1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const PaginationIcon = styled.img`
  position: absolute;
  top: 176px;
  left: 32px;
  width: 60px;
  height: 12px;
`;
const Recommended = styled.div`
  position: absolute;
  top: 516px;
  left: 648px;
  width: 864px;
  height: 188px;
  display: none;
  font-size: var(--font-size-xs);
`;
const LogoChild = styled.div`
  position: relative;
  border-radius: var(--br-9xs) var(--br-9xs) var(--br-5xl) var(--br-9xs);
  background-color: var(--yellow-500);
  width: 32px;
  height: 32px;
`;
const LogoItem = styled.div`
  position: relative;
  border-radius: var(--br-9xs) var(--br-9xs) var(--br-5xl) var(--br-9xs);
  background-color: var(--color-turquoise);
  width: 32px;
  height: 32px;
  margin-top: -28px;
`;
const Logo1 = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  padding: 0px var(--padding-9xs) var(--padding-9xs) 0px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-end;
`;
const Hounter = styled.b`
  position: relative;
  text-transform: capitalize;
`;
const Logo = styled.div`
  position: absolute;
  top: 5px;
  left: 0px;
  width: 115px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--font-size-base);
`;
const AboutUsWrapper = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--color-gray-200);
  border: 1px solid var(--color-gray-100);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
`;
const Article = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const EvaarrowIosForwardFillIcon = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PropertyParent = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--color-gray-200);
  border: 1px solid var(--color-gray-100);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 6px;
  left: 693px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  color: var(--neutral-100);
`;
const SignUp = styled.div`
  position: relative;
  line-height: 22px;
  font-weight: 600;
`;
const SignUpWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 1093px;
  border-radius: var(--br-13xl);
  background-color: var(--green-100);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xl);
  align-items: center;
  justify-content: flex-start;
  color: var(--green-700);
`;
const Navbar = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  width: 1200px;
  height: 46px;
  font-size: var(--font-size-sm);
`;
const FindThePlace = styled.p`
  margin: 0;
`;
const FindThePlaceContainer = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 496px;
  -webkit-text-stroke: 1px #1b1c57;
`;
const TitleChild = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--yellow-300);
  width: 258px;
  height: 4px;
  display: none;
`;
const EverythingYouNeed = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 28px;
  color: var(--mrt-app-neutral-01);
  display: inline-block;
  width: 496px;
  opacity: 0.75;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  color: var(--mrt-app-headline);
`;
const Fluentlocation16FilledIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const SearchForThe = styled.div`
  flex: 1;
  position: relative;
  line-height: 22px;
  font-weight: 500;
`;
const SearchButton = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--green-500);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  color: var(--color-white);
`;
const Search = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--color-white);
  border: 1px solid var(--neutral-300);
  box-sizing: border-box;
  width: 496px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-9xs)
    var(--padding-5xl);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-sm);
`;
const OurPartnership1 = styled.div`
  position: relative;
  line-height: 32px;
`;
const TravelokaLogo2Icon = styled.img`
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 64px;
  object-fit: cover;
`;
const TravelokaLogo2Parent = styled.div`
  width: 427px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const OurPartnership = styled.div`
  width: 427px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-base);
`;
const TitleSearch = styled.div`
  position: absolute;
  top: 182px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: 40px;
  color: var(--neutral-500);
`;
const HeroSection = styled.div`
  position: absolute;
  top: 0px;
  left: 120px;
  width: 1507px;
  height: 720px;
  font-size: var(--font-size-base);
  color: var(--mrt-app-headline);
`;
const FrameChild = styled.img`
  position: relative;
  border-radius: var(--br-base);
  width: 200px;
  height: 144px;
  object-fit: cover;
`;
const FrameItem = styled.img`
  position: relative;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  object-fit: cover;
`;
const DianneRussell = styled.div`
  flex: 1;
  position: relative;
  line-height: 22px;
`;
const EllipseParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const TheThingsWe = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 32px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--mrt-app-headline);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const MinRead = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
`;
const IcroundAccessTimeParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  color: var(--neutral-500);
`;
const FrameGroup = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const RectangleParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const Col1 = styled.div`
  position: absolute;
  top: 229px;
  left: 0px;
  width: 572px;
  height: 524px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-21xl);
`;
const Col2Child = styled.img`
  position: relative;
  border-radius: var(--br-base);
  width: 560px;
  height: 280px;
  object-fit: cover;
`;
const ThingsToKnow = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--mrt-app-headline);
`;
const WantToBuy = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  color: var(--mrt-app-neutral-01);
  opacity: 0.75;
`;
const FrameParent4 = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Col2 = styled.div`
  position: absolute;
  top: 231px;
  left: 640px;
  width: 560px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const RectangleDiv = styled.div`
  position: relative;
  background-color: var(--yellow-500);
  width: 32px;
  height: 1px;
`;
const SeeTipsAnd = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
`;
const RectangleParent1 = styled.div`
  width: 275px;
  height: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-5xs);
`;
const FindOutMoreContainer = styled.div`
  position: relative;
  font-size: var(--font-size-13xl);
  text-transform: capitalize;
  font-weight: 600;
  color: var(--mrt-app-headline);
`;
const Title2 = styled.div`
  width: 422px;
  height: 119px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-xs);
`;
const ContactNow = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--green-500);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  color: var(--color-white);
`;
const Title1 = styled.div`
  position: absolute;
  top: 0px;
  left: 389px;
  width: 422px;
  height: 189px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
  color: var(--yellow-500);
`;
const Section5 = styled.div`
  position: absolute;
  top: 2985px;
  left: 120px;
  width: 1200px;
  height: 753px;
  color: var(--neutral-700);
`;
const SubscribeChild = styled.img`
  position: absolute;
  top: 46px;
  left: 170px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const SubscribeItem = styled.img`
  position: absolute;
  top: 148px;
  left: 33px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const SubscribeInner = styled.img`
  position: absolute;
  top: 118px;
  left: 930px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const SubscribeChild1 = styled.img`
  position: absolute;
  top: 82px;
  left: 1048px;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const SubscribeChild2 = styled.img`
  position: absolute;
  top: 36px;
  left: 42px;
  border-radius: var(--br-5xl);
  width: 85px;
  height: 85px;
  object-fit: cover;
`;
const SubscribeChild3 = styled.img`
  position: absolute;
  top: 176px;
  left: 193px;
  border-radius: var(--br-5xl);
  width: 58px;
  height: 58px;
  object-fit: cover;
`;
const SubscribeChild4 = styled.img`
  position: absolute;
  top: 42px;
  left: 928px;
  border-radius: var(--br-5xl);
  width: 74px;
  height: 74px;
  object-fit: cover;
`;
const SubscribeChild5 = styled.img`
  position: absolute;
  top: 195px;
  left: 1070px;
  border-radius: var(--br-5xl);
  width: 59px;
  height: 59px;
  object-fit: cover;
`;
const SearchButton1 = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--green-500);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  color: var(--color-white);
`;
const Search2 = styled.div`
  position: absolute;
  top: 193px;
  left: 352px;
  border-radius: var(--br-13xl);
  background-color: var(--color-white);
  box-shadow: var(--shadow-smooth);
  width: 496px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-9xs)
    var(--padding-5xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const SubscribeForMoreContainer = styled.div`
  position: absolute;
  top: 65px;
  left: 389px;
  font-size: var(--font-size-13xl);
  line-height: 48px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--mrt-app-headline);
  text-align: center;
`;
const Subscribe = styled.div`
  position: absolute;
  top: 3858px;
  left: 120px;
  border-radius: var(--br-13xl);
  width: 1200px;
  height: 312px;
  overflow: hidden;
  background-image: url("/public/subscribe@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const WeProvideInformation = styled.div`
  position: absolute;
  top: 52px;
  left: 0px;
  line-height: 24px;
  display: inline-block;
  width: 320px;
  opacity: 0.75;
`;
const Logo2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 115px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--font-size-base);
  color: var(--mrt-app-headline);
`;
const BrandicofacebookIcon = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
`;
const BrandicofacebookParent = styled.div`
  position: absolute;
  top: 148px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Bio = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 320px;
  height: 180px;
  color: var(--mrt-app-neutral-01);
`;
const Property2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 600;
  color: var(--neutral-900);
`;
const House = styled.div`
  position: absolute;
  top: 47px;
  left: 0px;
  text-transform: capitalize;
`;
const Apartment = styled.div`
  position: absolute;
  top: 83px;
  left: 0px;
  text-transform: capitalize;
`;
const Villa = styled.div`
  position: absolute;
  top: 119px;
  left: 0px;
  text-transform: capitalize;
`;
const Property1 = styled.div`
  position: absolute;
  top: 0px;
  left: 583px;
  width: 79px;
  height: 137px;
`;
const TipsTricks = styled.div`
  position: absolute;
  top: 155px;
  left: 0px;
  text-transform: capitalize;
`;
const Article1 = styled.div`
  position: absolute;
  top: 0px;
  left: 750px;
  width: 97px;
  height: 173px;
`;
const Infohountercom = styled.div`
  position: absolute;
  top: 119px;
  left: 0px;
`;
const Contact = styled.div`
  position: absolute;
  top: 0px;
  left: 935px;
  width: 265px;
  height: 137px;
`;
const Footer = styled.div`
  position: absolute;
  top: 4290px;
  left: 120px;
  width: 1200px;
  height: 180px;
`;
const DesignRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 4590px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--neutral-500);
  font-family: var(--font-lexend);
`;
const Design = () => {
  return (
    <DesignRoot>
      <DesignChild />
      <VectorIcon alt="" src="/vector.svg" />
      <VectorIcon1 alt="" src="/vector1.svg" />
      <VectorIcon2 alt="" src="/vector2.svg" />
      <VectorIcon3 alt="" src="/vector3.svg" />
      <VectorIcon4 alt="" src="/vector4.svg" />
      <VectorIcon5 alt="" src="/vector5.svg" />
      <ColorBlurIcon alt="" src="/color-blur.svg" />
      <HeroSection>
        <Img>
          <Image6Icon alt="" src="/image-6@2x.png" />
          <KPeoplesParent>
            <KPeoples>
              <KPeoplesChild alt="" src="/group-7.svg" />
              <KPeopleParent>
                <KPeople>1K+ People</KPeople>
                <SuccessfullyGettingHome>
                  Successfully Getting Home
                </SuccessfullyGettingHome>
              </KPeopleParent>
            </KPeoples>
            <KPeoples>
              <KPeoplesItem alt="" src="/rectangle-12@2x.png" />
              <HousesParent>
                <Houses>56 Houses</Houses>
                <SoldMonthly>Sold Monthly</SoldMonthly>
              </HousesParent>
            </KPeoples>
            <KPeoples>
              <KPeoplesInner alt="" src="/ellipse-6@2x.png" />
              <HousesParent>
                <Houses>4K+</Houses>
                <SoldMonthly>People Looking for New Homes</SoldMonthly>
              </HousesParent>
            </KPeoples>
          </KPeoplesParent>
          <ImgChild alt="" src="/group-9.svg" />
        </Img>
        <Recommended>
          <Recommended1>
            <Div>
              <Child alt="" src="/rectangle-121@2x.png" />
              <ManhattanStyleParent>
                <ManhattanStyle>Manhattan Style</ManhattanStyle>
                <LoremIpsumDolor>
                  Lorem ipsum dolor sit amet, conser adipiscing elit
                </LoremIpsumDolor>
                <ClaritystarSolidParent>
                  <ClaritystarSolidIcon alt="" src="/claritystarsolid.svg" />
                  <Review>4.8 (400+ Review)</Review>
                </ClaritystarSolidParent>
              </ManhattanStyleParent>
            </Div>
            <Div>
              <Child alt="" src="/rectangle-122@2x.png" />
              <ManhattanStyleParent>
                <ManhattanStyle>New House For Your Future</ManhattanStyle>
                <LoremIpsumDolor>
                  Lorem ipsum dolor sit amet, conser adipiscing elit
                </LoremIpsumDolor>
                <ClaritystarSolidParent>
                  <ClaritystarSolidIcon alt="" src="/claritystarsolid.svg" />
                  <Review>4.8 (400+ Review)</Review>
                </ClaritystarSolidParent>
              </ManhattanStyleParent>
            </Div>
          </Recommended1>
          <PaginationIcon alt="" src="/pagination.svg" />
        </Recommended>
        <Navbar>
          <Logo>
            <Logo1>
              <LogoChild />
              <LogoItem />
            </Logo1>
            <Hounter>Hounter</Hounter>
          </Logo>
          <FrameParent>
            <AboutUsWrapper>
              <AboutUs />
            </AboutUsWrapper>
            <AboutUsWrapper>
              <Article>Article</Article>
            </AboutUsWrapper>
            <PropertyParent>
              <Article>Property</Article>
              <EvaarrowIosForwardFillIcon
                alt=""
                src="/evaarrowiosforwardfill.svg"
              />
            </PropertyParent>
          </FrameParent>
          <SignUpWrapper>
            <SignUp>Sign Up!</SignUp>
          </SignUpWrapper>
        </Navbar>
        <TitleSearch>
          <Title>
            <FindThePlaceContainer>
              <FindThePlace>find the place to</FindThePlace>
              <FindThePlace>
                <span>{`live `}</span>your dreams
              </FindThePlace>
              <FindThePlace>easily here</FindThePlace>
            </FindThePlaceContainer>
            <TitleChild />
            <EverythingYouNeed>
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </EverythingYouNeed>
          </Title>
          <Search>
            <Fluentlocation16FilledIcon
              alt=""
              src="/fluentlocation16filled.svg"
            />
            <SearchForThe>Search for the location you want!</SearchForThe>
            <SearchButton>
              <SignUp>Search</SignUp>
              <Fluentlocation16FilledIcon
                alt=""
                src="/evaarrowiosforwardfill1.svg"
              />
            </SearchButton>
          </Search>
          <OurPartnership>
            <OurPartnership1>{`Our Partnership `}</OurPartnership1>
            <TravelokaLogo2Parent>
              <TravelokaLogo2Icon alt="" src="/traveloka-logo-2@2x.png" />
              <TravelokaLogo2Icon alt="" src="/traveloka-logo-5@2x.png" />
              <TravelokaLogo2Icon alt="" src="/traveloka-logo-3@2x.png" />
              <TravelokaLogo2Icon alt="" src="/traveloka-logo-4@2x.png" />
            </TravelokaLogo2Parent>
          </OurPartnership>
        </TitleSearch>
      </HeroSection>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5>
        <Col1>
          <RectangleParent>
            <FrameChild alt="" src="/rectangle-22@2x.png" />
            <FrameGroup>
              <FrameContainer>
                <EllipseParent>
                  <FrameItem alt="" src="/ellipse-69@2x.png" />
                  <DianneRussell>Dianne Russell</DianneRussell>
                </EllipseParent>
                <TheThingsWe>
                  The things we need to check when we want to buy a house
                </TheThingsWe>
              </FrameContainer>
              <IcroundAccessTimeParent>
                <Fluentlocation16FilledIcon
                  alt=""
                  src="/icroundaccesstime.svg"
                />
                <MinRead>4 min read | 25 Apr 2021</MinRead>
              </IcroundAccessTimeParent>
            </FrameGroup>
          </RectangleParent>
          <RectangleParent>
            <FrameChild alt="" src="/rectangle-221@2x.png" />
            <FrameGroup>
              <FrameContainer>
                <EllipseParent>
                  <FrameItem alt="" src="/ellipse-610@2x.png" />
                  <DianneRussell>Courtney Henry</DianneRussell>
                </EllipseParent>
                <TheThingsWe>
                  7 Ways to distinguish the quality of the house we want to buy
                </TheThingsWe>
              </FrameContainer>
              <IcroundAccessTimeParent>
                <Fluentlocation16FilledIcon
                  alt=""
                  src="/icroundaccesstime.svg"
                />
                <MinRead>6 min read | 24 Apr 2021</MinRead>
              </IcroundAccessTimeParent>
            </FrameGroup>
          </RectangleParent>
          <RectangleParent>
            <FrameChild alt="" src="/rectangle-222@2x.png" />
            <FrameGroup>
              <FrameContainer>
                <EllipseParent>
                  <FrameItem alt="" src="/ellipse-611@2x.png" />
                  <DianneRussell>Darlene Robertson</DianneRussell>
                </EllipseParent>
                <TheThingsWe>
                  The best way to know the quality of the house we want to buy
                </TheThingsWe>
              </FrameContainer>
              <IcroundAccessTimeParent>
                <Fluentlocation16FilledIcon
                  alt=""
                  src="/icroundaccesstime.svg"
                />
                <MinRead>2 min read | 24 Apr 2021</MinRead>
              </IcroundAccessTimeParent>
            </FrameGroup>
          </RectangleParent>
        </Col1>
        <Col2>
          <Col2Child alt="" src="/rectangle-23@2x.png" />
          <FrameParent4>
            <FrameContainer>
              <EllipseParent>
                <FrameItem alt="" src="/ellipse-612@2x.png" />
                <DianneRussell>Cameron Williamson</DianneRussell>
              </EllipseParent>
              <ThingsToKnow>
                12 Things to know before buying a house
              </ThingsToKnow>
              <WantToBuy>
                Want to buy a house but are unsure about what we should know,
                here I will try to explain what we should know and check when we
                want to buy a house
              </WantToBuy>
            </FrameContainer>
            <IcroundAccessTimeParent>
              <Fluentlocation16FilledIcon alt="" src="/icroundaccesstime.svg" />
              <MinRead>8 min read | 25 Apr 2021</MinRead>
            </IcroundAccessTimeParent>
          </FrameParent4>
        </Col2>
        <Title1>
          <Title2>
            <RectangleParent1>
              <RectangleDiv />
              <SeeTipsAnd>See tips and trick from our partnership</SeeTipsAnd>
            </RectangleParent1>
            <FindOutMoreContainer>
              <FindThePlace>Find out more about</FindThePlace>
              <FindThePlace>selling and buying homes</FindThePlace>
            </FindOutMoreContainer>
          </Title2>
          <ContactNow>
            <SignUp>More Artikel</SignUp>
          </ContactNow>
        </Title1>
      </Section5>
      <Subscribe>
        <SubscribeChild alt="" src="/ellipse-613@2x.png" />
        <SubscribeItem alt="" src="/ellipse-7@2x.png" />
        <SubscribeInner alt="" src="/ellipse-8@2x.png" />
        <SubscribeChild1 alt="" src="/ellipse-9@2x.png" />
        <SubscribeChild2 alt="" src="/rectangle-123@2x.png" />
        <SubscribeChild3 alt="" src="/rectangle-25@2x.png" />
        <SubscribeChild4 alt="" src="/rectangle-26@2x.png" />
        <SubscribeChild5 alt="" src="/rectangle-27@2x.png" />
        <Search2>
          <Fluentlocation16FilledIcon alt="" src="/evaemailfill.svg" />
          <SearchForThe>Your email here</SearchForThe>
          <SearchButton1>
            <SignUp>Subsribe Now</SignUp>
          </SearchButton1>
        </Search2>
        <SubscribeForMoreContainer>
          <FindThePlace>Subscribe For More Info</FindThePlace>
          <FindThePlace>and update from Hounter</FindThePlace>
        </SubscribeForMoreContainer>
      </Subscribe>
      <Footer>
        <Bio>
          <WeProvideInformation>
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </WeProvideInformation>
          <Logo2>
            <Logo1>
              <LogoChild />
              <LogoItem />
            </Logo1>
            <Hounter>Hounter</Hounter>
          </Logo2>
          <BrandicofacebookParent>
            <BrandicofacebookIcon alt="" src="/brandicofacebook.svg" />
            <BrandicofacebookIcon alt="" src="/antdesigntwitteroutlined.svg" />
            <BrandicofacebookIcon alt="" src="/antdesigninstagramfilled.svg" />
          </BrandicofacebookParent>
        </Bio>
        <Property1>
          <Property2>Property</Property2>
          <House>House</House>
          <Apartment>Apartment</Apartment>
          <Villa>Villa</Villa>
        </Property1>
        <Article1>
          <Property2>Article</Property2>
          <House>New Article</House>
          <Apartment>Popular Article</Apartment>
          <TipsTricks>{`Tips & Tricks`}</TipsTricks>
          <Villa>Most Read</Villa>
        </Article1>
        <Contact>
          <Property2>Contact</Property2>
          <House>2464 Royal Ln. Mesa, New Jersey 45463</House>
          <Apartment>(671) 555-0110</Apartment>
          <Infohountercom>info@hounter.com</Infohountercom>
        </Contact>
      </Footer>
    </DesignRoot>
  );
};

export default Design;
