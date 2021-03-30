import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/Section/SectionWrapper";
import {SectionTitle} from "../../../component/_layout/Section/SectionTitle";
import {SectionSubtitle} from "../../../component/_layout/Section/SectionSubtitle";
import styled from "styled-components/macro";
import partnerImage from '../../../assets/img/about/shopify.png'
import {BiggerParagraph} from "../../../component/_typography/BiggerParagraph";

export const AboutHome = () => {
    return (
        <SectionWrapper>
            <Container>
                <SectionTitle>
                    What we do
                </SectionTitle>
                <SectionSubtitle>
                    We get results
                </SectionSubtitle>

                <BiggerParagraph>
                    We are a digital marketing agency that’s specializing in bringing new clients to your business on a daily
                    basis.
                    If you are looking to grow your business by raising appearance, generating leads, or increasing your sales
                    online we can provide strong results.
                    Our experts will help you to scale your business to the top by converting your social media pages
                    and website traffic into paying customers.
                </BiggerParagraph>
                <PartnerList>

                    <div>
                        <PartnerImage src={partnerImage} alt=""/>
                    </div>
                    <div>
                        <PartnerImage src={partnerImage} alt=""/>
                    </div>
                    <div>
                        <PartnerImage src={partnerImage} alt=""/>
                    </div>
                    <div>
                        <PartnerImage src={partnerImage} alt=""/>
                    </div>

                </PartnerList>
            </Container>
        </SectionWrapper>
    )
}

const PartnerList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({theme}) => theme.mediaQuery.mobileL}) {
    justify-content: center;
  }
`

const PartnerImage = styled.img`
  margin-top: 40px;
  
  max-width: 200px;
  height: 65px;
  
  cursor: pointer;

  &:hover {
    filter: ${({theme}) => theme.effect.glow};
  }
`