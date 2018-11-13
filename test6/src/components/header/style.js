import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  width: 100%;
`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 58px;
    width: 100px;
    background-image:url(${logoPic});
    -webkit-background-size: contain;background-size: contain;
    cursor: pointer;
    z-index: 1;
`;
export const Nav = styled.div`
    width: 65%;
    margin: 0 auto;
    height: 100%;
    padding-right: 110px;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
      float: right;
      color:#969696;
    }
    &.active{
      color:salmon;
    }
`;
export const SearchWrapper = styled.div`
  float:left;
  position: relative;
  .searchIcon{
      position: absolute;
      right: 5px;
      bottom: 5px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      color:#777;
      &.focuse{
       background-color:#ccc;
       color:#fff;
      }
  }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`;
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    margin-top: 9px;
    margin-left: 20px;
    border-radius: 20px;
    background-color: #eee;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    color:#666;
    &::placeholder{
    color:#999;
    }
    &.focuse{
      width: 240px;
    }
    &.slide-enter{
        width: 160px;
        transition: all 0.5s ease-out;
    }
    &.slide-enter-active{
    width: 240px;
    }
    &.slide-exit{
    transition: all 0.5s ease-out;
    }
    &.slide-exit-active{
    width: 160px;
    }
`;
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background-color:#fff;
  &::after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color:#969696;
  line-height: 20px;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  &:hover{
    color:#333;
  }
  .spin{
    display: block;
    float:left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in-out;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  display: block;
  float:left;
  line-height: 20px;
  padding: 2px 6px;
  font-size: 12px;
  border: 1px solid #ddd;
  color:#787878;
  border-radius: 3px;
  margin: 0 6px 6px 0;
  cursor: pointer;
  &:hover{
    color:#333;
  }
`;
export const Addition = styled.div`
position: absolute;
right: 0;
top: 0;
height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  line-height: 38px;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg{
  color:#ec6149;
  }
  &.writting{
  background-color:#ec6149;
  color:#fff;
  }
`;