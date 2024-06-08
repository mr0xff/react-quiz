import React,{ useState } from 'react';
import questions from './components/questions';
import ContainerQuiz from './components/container-quiz';
import Button from './components/button';
import ContainerContext from './components/container-context';
import Console from './components/console';
import ResultsAnalysis from './components/results-analysis';

export default function App(){
  const [ idQuestion, setIdQuestion ] = useState(0);
  const [ responses, setResponses ] = useState([]);
  const [ selectedAnswer, setSelectedAnswer ] = useState();
  const [ isDone, setIsDone ] = useState(false);

  const nextQuestion = ()=>{
    if(idQuestion < questions.length - 1)
      setIdQuestion(idQuestion+1);
  };
  const backQuestion = ()=> {
    if(idQuestion > 0)
      setIdQuestion(idQuestion-1);
  }
  
  return(
    <main>
      <ContainerContext.Provider value={{
        responses,
        setResponses,
        selectedAnswer,
        setSelectedAnswer,
        idQuestion,
        isDone
      }}>
        {isDone ?
          <ResultsAnalysis />
          :
          <>
            <ContainerQuiz 
              question={questions[idQuestion].label} 
              answers={questions[idQuestion].answers}
            />

            <div style={{display: 'flex', gap: 9}}>
              <Button onClick={backQuestion}>
                Voltar
              </Button>
              <Button onClick={
                idQuestion < questions.length - 1 ?
                nextQuestion:
                ()=> setIsDone(true)
              }>
                {idQuestion < questions.length - 1 ?'Proximo':'Terminar'}
              </Button>
            </div>
          </>
        }

        <Console data={{responses}} />
      </ContainerContext.Provider>
    </main>
  )
}