import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

`;

export const Stories = styled.div`
  margin-top: 25px;
  border: 1px solid #ddd;
  max-height: 90px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  
  div.profiles{ 
    height: 100%;
    margin-right: 10px;

    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    p{
      font-size: 8px;
      max-width: 50px;
      color: #666;
      text-align: center;
    }
  }
`


export const FeedList = styled.div`
  background: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;

   header{
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-info{
      display: flex;
      flex-direction: column;

      span{
        font-size: 13px;
      }
      .place{
        font-size: 11px;
        color: #666;
        margin-top: 3px;
      }
    }
   }

   > img {
     width: 100%;
   }

   footer{
     padding: 10px;

     .actions{
       margin-bottom: 5px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       cursor: pointer;
       > img{
         width: 20px;
       }       
       .right{
         img{
          margin-right: 10px;
         }
       }
     }

     p{
       margin-top: 2px;
       font-size: 13px;
     }
     span{
       font-size: 12px;
       display: block;
       color: #05376b;
       margin-top: 2px;
     }
   }

`