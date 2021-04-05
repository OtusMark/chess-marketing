import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import styled from "styled-components/macro";
import {DefaultB2Reg} from "../../../component/_typography/DefaultB2Reg";
import {SectionTitle} from "../../../component/_layout/SectionTitle";

export const About = () => {
    return (
        <SectionWrapper>
            <Container>
                <SectionTitle title={'About us'} subtitle={'We get results'}/>
                <AboutInner>
                    <AboutDescription>
                        <DefaultB2Reg>
                            We are a digital marketing agency that’s specializing in bringing new clients to your business on a daily
                            basis.
                            If you are looking to grow your business by raising appearance, generating leads, or increasing your sales
                            online we can provide strong results.
                            Our experts will help you to scale your business to the top by converting your social media pages
                            and website traffic into paying customers.
                        </DefaultB2Reg>
                    </AboutDescription>
                    <div>
                        Image
                    </div>
                </AboutInner>
            </Container>
        </SectionWrapper>
    )
}

// Styles
const AboutInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const AboutDescription = styled.div`
`