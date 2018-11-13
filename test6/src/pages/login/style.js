import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color:#eee;
  z-index: 0;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  background-color:#fff;
  -webkit-box-shadow: 0 0  8px  rgba(0,0,0,.1);
  -moz-box-shadow: 0 0  8px  rgba(0,0,0,.1);
  box-shadow: 0 0  8px  rgba(0,0,0,.1);
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-70%);
  padding-top: 30px;
`;
export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding:0 10px ;
  margin: 10px auto;
  color:#777; 
`;
export const Button = styled.button`
  width: 220px;
  height: 35px;
  line-height: 35px;
  color:#fff;
  background-color:#3194d0;
  border-radius: 15px;
  margin:10px auto ;
  text-align: center;
  display: block;
  border: 0;
`;