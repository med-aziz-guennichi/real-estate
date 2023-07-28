import styled from "styled-components";

const FrameChild = styled.div`
  position: relative;
  background-color: var(--yellow-500);
  width: 32px;
  height: 1px;
`;
const SeeOurReview = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
`;
const RectangleParent = styled.div`
  width: 107px;
  height: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-5xs);
`;
const WhatOurUser = styled.div`
  position: relative;
  font-size: var(--font-size-13xl);
  text-transform: capitalize;
  font-weight: 600;
  color: var(--mrt-app-headline);
`;
const Title = styled.div`
  position: absolute;
  top: 0px;
  left: 888px;
  width: 461px;
  height: 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-xs);
`;
const Review1Child = styled.img`
  position: relative;
  border-radius: var(--br-5xs);
  width: 740px;
  height: 400px;
  object-fit: cover;
  opacity: 0.7;
`;
const MyHouseSold = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 548px;
`;
const IWasFinally = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 24px;
  color: var(--mrt-app-neutral-01);
  display: inline-block;
  width: 548px;
  height: 72px;
  flex-shrink: 0;
  opacity: 0.75;
`;
const TitleReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const FrameItem = styled.img`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
const CourtneyHenry = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
  font-weight: 500;
`;
const CeoAndarafish = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
  font-weight: 500;
  color: var(--neutral-500);
`;
const NamaPekerjaan = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const EllipseParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const BxbxsStarIcon = styled.img`
  position: relative;
  width: 28px;
  height: 28px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Div = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 600;
`;
const BxbxsStarParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-xl);
  color: var(--neutral-700);
`;
const Info = styled.div`
  width: 548px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: var(--gap-5xl);
  font-size: var(--font-size-sm);
  color: var(--neutral-900);
`;
const Review2 = styled.div`
  border-radius: var(--br-base);
  background-color: var(--color-white);
  box-shadow: var(--shadow-smooth);
  width: 612px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  margin-top: -144px;
`;
const Review1 = styled.div`
  width: 740px;
  height: 505px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ThroughThisWebsite = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 24px;
  color: var(--mrt-app-neutral-01);
  display: inline-block;
  width: 548px;
  opacity: 0.75;
`;
const FrameInner = styled.img`
  position: relative;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  object-fit: cover;
`;
const Review = styled.div`
  position: absolute;
  top: 119px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-37xl);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--mrt-app-headline);
`;
const PaginationIcon = styled.img`
  position: absolute;
  top: 656px;
  left: 1138px;
  width: 56px;
  height: 8px;
`;
const Section4Root = styled.div`
  position: absolute;
  top: 2201px;
  left: -398px;
  width: 2332px;
  height: 664px;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--yellow-500);
  font-family: var(--font-lexend);
`;
const Section4 = () => {
  return (
    <Section4Root>
      <Title>
        <RectangleParent>
          <FrameChild />
          <SeeOurReview>See Our Review</SeeOurReview>
        </RectangleParent>
        <WhatOurUser>What Our User Say About Us</WhatOurUser>
      </Title>
      <Review>
        <Review1>
          <Review1Child alt="" src="/rectangle-21@2x.png" />
          <Review2>
            <TitleReview>
              <MyHouseSold>My house sold out fast!</MyHouseSold>
              <IWasFinally>
                I was finally able to sell my house quickly through Hounter by
                immediately setting me up with people who wanted my house. I
                also do not get a discount from the sale of my house. Awesome!
              </IWasFinally>
            </TitleReview>
            <Info>
              <EllipseParent>
                <FrameItem alt="" src="/ellipse-66@2x.png" />
                <NamaPekerjaan>
                  <CourtneyHenry>Courtney Henry</CourtneyHenry>
                  <CeoAndarafish>CEO Andarafish</CeoAndarafish>
                </NamaPekerjaan>
              </EllipseParent>
              <BxbxsStarParent>
                <BxbxsStarIcon alt="" src="/bxbxsstar.svg" />
                <Div>4.3</Div>
              </BxbxsStarParent>
            </Info>
          </Review2>
        </Review1>
        <Review1>
          <Review1Child alt="" src="/rectangle-211@2x.png" />
          <Review2>
            <TitleReview>
              <MyHouseSold>
                Best! I got the house I wanted through Hounter
              </MyHouseSold>
              <ThroughThisWebsite>
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </ThroughThisWebsite>
            </TitleReview>
            <Info>
              <EllipseParent>
                <FrameInner alt="" src="/ellipse-67@2x.png" />
                <NamaPekerjaan>
                  <CourtneyHenry>Dianne Russell</CourtneyHenry>
                  <CeoAndarafish>Manager Director</CeoAndarafish>
                </NamaPekerjaan>
              </EllipseParent>
              <BxbxsStarParent>
                <BxbxsStarIcon alt="" src="/bxbxsstar.svg" />
                <Div>4.6</Div>
              </BxbxsStarParent>
            </Info>
          </Review2>
        </Review1>
        <Review1>
          <Review1Child alt="" src="/rectangle-212@2x.png" />
          <Review2>
            <TitleReview>
              <MyHouseSold>
                Through the Hounter, I can get a house for my self
              </MyHouseSold>
              <ThroughThisWebsite>
                By looking for information about what kind of house we want, we
                managed to get the house we wanted very quickly, and directly
                connected with the seller to be able to ask about the details,
                very helpful!
              </ThroughThisWebsite>
            </TitleReview>
            <Info>
              <EllipseParent>
                <FrameInner alt="" src="/ellipse-68@2x.png" />
                <NamaPekerjaan>
                  <CourtneyHenry>Esther Howard</CourtneyHenry>
                  <CeoAndarafish>Head of Marketing</CeoAndarafish>
                </NamaPekerjaan>
              </EllipseParent>
              <BxbxsStarParent>
                <BxbxsStarIcon alt="" src="/bxbxsstar1.svg" />
                <Div>4.6</Div>
              </BxbxsStarParent>
            </Info>
          </Review2>
        </Review1>
      </Review>
      <PaginationIcon alt="" src="/pagination1.svg" />
    </Section4Root>
  );
};

export default Section4;
