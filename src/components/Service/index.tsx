/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import phone from './phone.svg'
import code from './code.svg'
import website from './website.svg'

const SectionService = styled.section`
  background-color: f7f7f7;
  margin-top: 70px;
  margin-left: 70px;
`
const H1 = styled.h1`
  font-size: 3em;
`

const H2 = styled.h2`
  margin-bottom: 10px;
`

const DivThreeBox = styled.div`
  display: flex;
  justify-content: space-around;
`

const DivOneBloc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  padding: 30px;
  margin: 30px;
  &:hover {
    border: solid 3px black;
  }
`

const Img = styled.img`
  width: 300px;
  height: 300px;
  filter: grayscale(1);
`

export default function Service() {
  return (
    <SectionService id="services">
      <H1>Mes services</H1>
      <DivThreeBox>
        <DivOneBloc>
          <div>
            <Img src={website} alt="website" />
          </div>
          <H2>Application webs</H2>
          <p>
            Développement d'application webs responsives et <br /> performantes
          </p>
        </DivOneBloc>
        <DivOneBloc>
          <div>
            <Img src={phone} alt="téléphone" />
          </div>
          <H2>Application mobiles</H2>
          <p>
            Développement d'application mobiles cross plateforme <br /> Ios et Android avec <br /> React Native{' '}
          </p>
        </DivOneBloc>
        <DivOneBloc>
          <div>
            <Img src={code} alt="code" />
          </div>
          <H2>Shopify</H2>
          <p>
            Création d'applications et extension de thème <br />
            Shopify
          </p>
        </DivOneBloc>
      </DivThreeBox>
    </SectionService>
  )
}
