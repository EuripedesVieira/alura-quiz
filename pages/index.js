import styled from 'styled-components'
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

/*
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;
*/
const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
         <Widget.Header>
            <h1>Fala meus queridos</h1>
          </Widget.Header>
          <Widget.Content>
            <p>ola bom dia</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
    </QuizBackground>
  )
}
