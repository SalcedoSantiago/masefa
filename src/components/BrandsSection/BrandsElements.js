import styled from "styled-components";

export const SectionStyled = styled.section`
  padding: 60px 2rem;
  max-width: 1280px;
  margin: 0 auto;
  `


export const PartnersContainer = styled.div`
  display: flex;
  align-items: center;

  .featured{

    h2{
      font-size: 20px;
      padding-right: 10px;
      color: var(--blue);
      font-weight: 700;
    }
  }
`

export const WrapperImage = styled.div`
  margin-right: 15px;
  margin-left: 15px;

`

export const ImageLogo = styled.img`
  max-height: 100px;
  width: auto;
`


export const LineSpan = styled.span`
  height: 100%;
  border-left: 1px solid #ccc;
  margin-left: 30px;

`

export const FlexEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
`