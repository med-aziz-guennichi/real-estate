import styled from "styled-components";

const LetsTourAnd = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
  text-transform: capitalize;
  font-weight: 600;
`;
const FrameChild = styled.div`
  position: relative;
  background-color: var(--yellow-500);
  width: 32px;
  height: 1px;
`;
const ReadyToSell = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 134px;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-sm);
  color: var(--yellow-500);
`;
const HousesRecommendedBy = styled.div`
  position: absolute;
  top: 86px;
  left: 40px;
  font-size: var(--font-size-base);
  line-height: 28px;
  color: var(--mrt-app-neutral-01);
  display: inline-block;
  width: 413px;
  opacity: 0.75;
`;
const FeaturedHouse = styled.div`
  position: relative;
  width: 522px;
  height: 142px;
`;
const HouseDetail1 = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 600;
  color: var(--mrt-app-headline);
  display: inline-block;
  width: 413px;
  opacity: 0.75;
`;
const Bed1Icon = styled.img`
  position: relative;
  border-radius: var(--br-9xs);
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Bedrooms1 = styled.div`
  flex: 1;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
`;
const Bedrooms = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Row1 = styled.div`
  width: 440px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-34xl);
`;
const HouseDetail = styled.div`
  width: 440px;
  height: 124px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-base);
  color: var(--neutral-700);
`;
const TitleHouseDetail = styled.div`
  width: 522px;
  height: 282px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const InfoChild = styled.div`
  position: relative;
  background-color: var(--neutral-100);
  width: 440px;
  height: 2px;
`;
const FrameItem = styled.img`
  position: relative;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
`;
const DianneRussell = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const ManagerDirector = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 24px;
  font-weight: 500;
  color: var(--neutral-500);
`;
const NamaPekerjaan = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const EllipseParent = styled.div`
  width: 218px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Fluentcall20FilledIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ContactNow1 = styled.div`
  position: relative;
  line-height: 22px;
  font-weight: 600;
`;
const ContactNow = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--green-500);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const ContactInfo = styled.div`
  width: 440px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-40xl);
  font-size: var(--font-size-lg);
  color: var(--neutral-900);
`;
const Info = styled.div`
  width: 522px;
  height: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const ImgIcon = styled.img`
  position: relative;
  width: 528px;
  height: 459px;
`;
const Section3Root = styled.div`
  position: absolute;
  top: 1622px;
  left: 120px;
  width: 1200px;
  height: 459px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-131xl);
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--mrt-app-headline);
  font-family: var(--font-lexend);
`;
const Section3 = () => {
  return (
    <Section3Root>
      <Info>
        <TitleHouseDetail>
          <FeaturedHouse>
            <LetsTourAnd>Let’s tour and see our house!</LetsTourAnd>
            <RectangleParent>
              <FrameChild />
              <ReadyToSell>Ready to Sell!</ReadyToSell>
            </RectangleParent>
            <HousesRecommendedBy>
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </HousesRecommendedBy>
          </FeaturedHouse>
          <HouseDetail>
            <HouseDetail1>House Detail</HouseDetail1>
            <Row1>
              <Bedrooms>
                <Bed1Icon alt="" src="/bed-1.svg" />
                <Bedrooms1>4 Bedrooms</Bedrooms1>
              </Bedrooms>
              <Bedrooms>
                <Bed1Icon alt="" src="/bath-1.svg" />
                <Bedrooms1>2 Bathrooms</Bedrooms1>
              </Bedrooms>
            </Row1>
            <Row1>
              <Bedrooms>
                <Bed1Icon alt="" src="/cargarage-1.svg" />
                <Bedrooms1>1 Carport</Bedrooms1>
              </Bedrooms>
              <Bedrooms>
                <Bed1Icon alt="" src="/stairswithhandrail-1.svg" />
                <Bedrooms1>2 Floors</Bedrooms1>
              </Bedrooms>
            </Row1>
          </HouseDetail>
        </TitleHouseDetail>
        <InfoChild />
        <ContactInfo>
          <EllipseParent>
            <FrameItem alt="" src="/ellipse-65@2x.png" />
            <NamaPekerjaan>
              <DianneRussell>Dianne Russell</DianneRussell>
              <ManagerDirector>Manager Director</ManagerDirector>
            </NamaPekerjaan>
          </EllipseParent>
          <ContactNow>
            <Fluentcall20FilledIcon alt="" src="/fluentcall20filled.svg" />
            <ContactNow1>Contact Now</ContactNow1>
          </ContactNow>
        </ContactInfo>
      </Info>
      <ImgIcon alt="" src="/img4.svg" />
    </Section3Root>
  );
};

export default Section3;
