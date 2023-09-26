/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import phone from './phone.svg'
import code from './code.svg'
import website from './website.svg'
import { useTranslation } from 'react-i18next'

const SectionService = styled.section`
  background-color: f7f7f7;
  margin-top: 70px;
  margin-left: 70px;
  @media (max-width: 768px) {
    margin-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
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
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: none;
  }
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
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    width: 100%;
    &:hover {
      display: none;
    }
  }
`

const Img = styled.img`
  width: 300px;
  height: 300px;
  filter: grayscale(1);
`

export default function Service() {
  const { t } = useTranslation()
  return (
    <SectionService id="services">
      <H1>{t('services.title')}</H1>
      <DivThreeBox>
        <DivOneBloc>
          <div>
            <Img src={website} alt="website" />
          </div>
          <H2>{t('services.web.title')}</H2>
          <p>{t('services.web.description')}</p>
        </DivOneBloc>
        <DivOneBloc>
          <div>
            <Img src={phone} alt="téléphone" />
          </div>
          <H2>{t('services.mobiles.title')}</H2>
          <p>{t('services.mobiles.description')}</p>
        </DivOneBloc>
        <DivOneBloc>
          <div>
            <Img src={code} alt="code" />
          </div>
          <H2>Shopify</H2>
          <p>{t('services.shopify.description')}</p>
        </DivOneBloc>
      </DivThreeBox>
    </SectionService>
  )
}
