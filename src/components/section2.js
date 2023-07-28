import styled from "styled-components";

const FeaturedHouse1 = styled.div`
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
const OurRecommendation = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 190px;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-sm);
  color: var(--yellow-500);
`;
const FeaturedHouse = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 293px;
  height: 70px;
`;
const PhhouseFillIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const House = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 500;
`;
const PhhouseFillParent = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--green-100);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xl);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--green-500);
`;
const IcroundVillaParent = styled.div`
  border-radius: var(--br-13xl);
  border: 1px solid var(--neutral-300);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xl);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Category = styled.div`
  position: absolute;
  top: 18px;
  left: 432px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--font-size-lg);
  color: var(--neutral-500);
`;
const AntDesignfireFilledIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const AntDesignfireFilledParent = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--red-100);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Img = styled.div`
  border-radius: var(--br-5xl);
  width: 340px;
  height: 382px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url("/public/img@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--red-500);
`;
const RoselandsHouse = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 32px;
  font-weight: 500;
`;
const Div = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 32px;
  font-weight: 500;
  color: var(--neutral-700);
`;
const NamaRumahHarga = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-5xl);
`;
const NamaPekerjaanChild = styled.img`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
const DianneRussell = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const ManchesterKentucky = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 22px;
  font-weight: 500;
  color: var(--neutral-500);
`;
const DianneRussellParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const NamaPekerjaan = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const NamaPekerjaanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-lg);
`;
const ImgParent = styled.div`
  border-radius: var(--br-11xs);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const PhhouseFillGroup = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--blue-100);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Img1 = styled.div`
  border-radius: var(--br-5xl);
  width: 340px;
  height: 382px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url("/public/img1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--blue-700);
`;
const NamaPekerjaan1 = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-lg);
`;
const EntypowalletParent = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--green-100);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Img2 = styled.div`
  border-radius: var(--br-5xl);
  width: 340px;
  height: 382px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url("/public/img2@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--green-700);
`;
const Img3 = styled.div`
  border-radius: var(--br-5xl);
  width: 340px;
  height: 382px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url("/public/img3@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--red-500);
`;
const House1 = styled.div`
  position: absolute;
  top: 110px;
  left: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  font-size: var(--font-size-sm);
  color: var(--neutral-900);
`;
const EvaarrowIosForwardFillIcon = styled.img`
  position: relative;
  width: 28px;
  height: 28px;
  overflow: hidden;
  flex-shrink: 0;
`;
const SearchButton = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--neutral-300);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
`;
const SearchButton1 = styled.div`
  border-radius: var(--br-13xl);
  background-color: var(--green-500);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-base);
  align-items: center;
  justify-content: flex-start;
`;
const Arrow = styled.div`
  position: absolute;
  top: 18px;
  left: 1064px;
  width: 136px;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Section2Root = styled.div`
  position: absolute;
  top: 840px;
  left: 120px;
  width: 1520px;
  height: 662px;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--mrt-app-headline);
  font-family: var(--font-lexend);
`;
const Section2 = () => {
  return (
    <Section2Root>
      <FeaturedHouse>
        <FeaturedHouse1>Featured House</FeaturedHouse1>
        <RectangleParent>
          <FrameChild />
          <OurRecommendation>Our Recommendation</OurRecommendation>
        </RectangleParent>
      </FeaturedHouse>
      <Category>
        <PhhouseFillParent>
          <PhhouseFillIcon alt="" src="/phhousefill.svg" />
          <House>House</House>
        </PhhouseFillParent>
        <IcroundVillaParent>
          <PhhouseFillIcon alt="" src="/icroundvilla.svg" />
          <House>Villa</House>
        </IcroundVillaParent>
        <IcroundVillaParent>
          <PhhouseFillIcon alt="" src="/icroundapartment.svg" />
          <House>Apartment</House>
        </IcroundVillaParent>
      </Category>
      <House1>
        <ImgParent>
          <Img>
            <AntDesignfireFilledParent>
              <AntDesignfireFilledIcon alt="" src="/antdesignfirefilled.svg" />
              <OurRecommendation>Popular</OurRecommendation>
            </AntDesignfireFilledParent>
          </Img>
          <NamaRumahHarga>
            <RoselandsHouse>Roselands House</RoselandsHouse>
            <Div>$ 35.000.000</Div>
          </NamaRumahHarga>
          <NamaPekerjaanWrapper>
            <NamaPekerjaan>
              <NamaPekerjaanChild alt="" src="/ellipse-61@2x.png" />
              <DianneRussellParent>
                <DianneRussell>Dianne Russell</DianneRussell>
                <ManchesterKentucky>Manchester, Kentucky</ManchesterKentucky>
              </DianneRussellParent>
            </NamaPekerjaan>
          </NamaPekerjaanWrapper>
        </ImgParent>
        <ImgParent>
          <Img1>
            <PhhouseFillGroup>
              <AntDesignfireFilledIcon alt="" src="/phhousefill1.svg" />
              <OurRecommendation>New house</OurRecommendation>
            </PhhouseFillGroup>
          </Img1>
          <NamaRumahHarga>
            <RoselandsHouse>Woodlandside</RoselandsHouse>
            <Div>$ 20.000.000</Div>
          </NamaRumahHarga>
          <NamaPekerjaan1>
            <NamaPekerjaanChild alt="" src="/ellipse-62@2x.png" />
            <DianneRussellParent>
              <DianneRussell>Robert Fox</DianneRussell>
              <ManchesterKentucky>
                Dr. San Jose, South Dakota
              </ManchesterKentucky>
            </DianneRussellParent>
          </NamaPekerjaan1>
        </ImgParent>
        <ImgParent>
          <Img2>
            <EntypowalletParent>
              <AntDesignfireFilledIcon alt="" src="/entypowallet.svg" />
              <OurRecommendation>Best Deals</OurRecommendation>
            </EntypowalletParent>
          </Img2>
          <NamaRumahHarga>
            <RoselandsHouse>The Old Lighthouse</RoselandsHouse>
            <Div>$ 44.000.000</Div>
          </NamaRumahHarga>
          <NamaPekerjaan1>
            <NamaPekerjaanChild alt="" src="/ellipse-63@2x.png" />
            <DianneRussellParent>
              <DianneRussell>Ronald Richards</DianneRussell>
              <ManchesterKentucky>Santa Ana, Illinois</ManchesterKentucky>
            </DianneRussellParent>
          </NamaPekerjaan1>
        </ImgParent>
        <ImgParent>
          <Img3>
            <AntDesignfireFilledParent>
              <AntDesignfireFilledIcon alt="" src="/antdesignfirefilled.svg" />
              <OurRecommendation>Popular</OurRecommendation>
            </AntDesignfireFilledParent>
          </Img3>
          <NamaRumahHarga>
            <RoselandsHouse>Cosmo's House</RoselandsHouse>
            <Div>$ 22.000.000</Div>
          </NamaRumahHarga>
          <NamaPekerjaan1>
            <NamaPekerjaanChild alt="" src="/ellipse-64@2x.png" />
            <DianneRussellParent>
              <DianneRussell>Jenny Wilson</DianneRussell>
              <ManchesterKentucky>
                Preston Rd. Inglewood, Maine 98380
              </ManchesterKentucky>
            </DianneRussellParent>
          </NamaPekerjaan1>
        </ImgParent>
      </House1>
      <Arrow>
        <SearchButton>
          <EvaarrowIosForwardFillIcon
            alt=""
            src="/evaarrowiosforwardfill2.svg"
          />
        </SearchButton>
        <SearchButton1>
          <EvaarrowIosForwardFillIcon
            alt=""
            src="/evaarrowiosforwardfill3.svg"
          />
        </SearchButton1>
      </Arrow>
    </Section2Root>
  );
};

export default Section2;
