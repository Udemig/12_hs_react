import { Container } from "@mui/material";
import { styled } from "@mui/material";

// emotion ile Container elementinin stilini ayarlayabiliriz
const PageContainer = styled(Container)`
  padding-top: 50px;
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
`;

export default PageContainer;
