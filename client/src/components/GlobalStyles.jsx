import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


:root{
    --base-bg-color:#292929;
    --base-color:#e8e8e8;
    --sidebar-bg:#e4e3cf;
 
} 

#root{  
  width:100vw;
  height:100vh;
}

button{
  font-family: 'Archivo'
}
html,div,span,body{
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  border: 0;
  background:var(--base-bg-color);
  color:var(--base-color);
  font-family: 'Archivo'
}
body{
  width:100vw;
  height:100vh;
  overflow:hidden;
}

`;
