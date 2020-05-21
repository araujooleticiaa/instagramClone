import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  height: 65px;
  border-bottom: 1px solid #ddd;

  div{
   width: 100%;
   max-width: 980px;
   margin: 0 auto;
   height: 72px;
   padding: 0 30px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   .logo{
     img{
      width: 100px;
     }
   }

   .search{
     height: 40%;
     border-radius: 4px;
     border: 1px solid #ddd;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: row;

     img{
       width: 15px;
       margin-right: 5px;
     }

     input{
       border: 0;
       width: 40%;
     }
   }

   div.icons{
    display: flex;
    align-items: center;
    justify-content: flex-end;
      img{
        width: 25px;
        margin-right: 5px;
      }
   }
  }
`;

