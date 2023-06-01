import styled from 'styled-components'

export const PaymentRoot = styled.div`
  color: white;
  position: relative;
  width: 80%;
  justify-self: center;
  border-radius: 15px;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    min-height: 400px;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
  }
  @media screen and (max-width: 380px) {
    min-height: 450px;
  }
`
export const OverlayStyle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ImageBack = styled.div<{ img: string }>`
  position: absolute;

  background-image: url(${(props) => (props.img ? props.img : '')});
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
`

export const InfoBlock = styled.div`
  padding: 10px;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
