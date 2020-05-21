import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline:0;
 }
 html, body{
  background: #fafafa;
  font: 14px Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
 }
 body::-webkit-scrollbar {
    width: 1em;
 }
 body::-webkit-scrollbar-track {
     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
 }
 body::-webkit-scrollbar-thumb {
   background-color: darkgrey;
   outline: 1px solid slategrey;
 }
`;
