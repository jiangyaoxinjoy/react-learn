import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;
export const Logo = styled.a.attrs({href: '/'})`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 58px;
  width: 100px;
  background-image:url(${logoPic});
  -webkit-background-size: contain;background-size: contain;
  cursor: pointer;
`;
export const Nav = styled.div`
width: 960px;
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
  .iconfont{
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