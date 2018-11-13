import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  width: 625px;
  float:left;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float:left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background-color:#f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-right: 18px;
  margin-bottom: 18px;
  img{
    width: 32px;
    height: 30px;
    display: block;
    float:left;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }

`;
export const ListInfo = styled.div`
  width: 500px;
  float:left;
  .title{
    line-height: 27px;
    font-weight: bold;
    color:#333;
    font-size: 18px;
  }
  .desc{
    line-height: 24px;
    font-size: 12px;
    color:#999;
  }
`;
export const LoadMore = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color:#fff;
    cursor:pointer;
`;

export const BoardWrapper = styled.div`
  margin-top: 30px;
`;
export const BoardItem = styled.a`
  width: 100%;
  height: 50px;
  display: block;
  margin-bottom: 6px;
  cursor: pointer;
  background-image:url(${(props) => props.imgUrl});
  -webkit-background-size: contain;
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;
export const WriterHeader = styled.div`
  margin-top: 30px;
  div{
    color:#787878;
    font-size: 14px;
  }
  span{
    display: inline-block;
    float: right;
    cursor: pointer;
    color:#969696;
    &:hover{
      color:#333;
    }
  }
`;
export const WriterItem = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  margin: 12px 0;
  overflow: hidden;
  img{
      float:left;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
  }
  .name{
    color:#333;
    margin-top: 2px;
  }
  .name,.desc{
    line-height: 1.3em;
    font-size: 12px;
  }
  .desc{
    color:#787878;
    margin-top: 2px;
  }
  .follow{
    position: absolute;
    right: 0;
    top: 0px;
    font-size: 12px;
    color:#42c02e;
  }
`;
export const WriterBtn = styled.div`
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    margin-top: 15px;
`;
export const BackTop = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
  i{
    font-size: 30px;
  }
`;