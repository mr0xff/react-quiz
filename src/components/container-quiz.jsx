import React, { useContext } from 'react';
import ContainerContext from './container-context';

export default function ContainerQuiz({
  question,
  answers
}){
  const {
    responses, 
    setResponses,
    setSelectedAnswer
   } = useContext(ContainerContext);

  return(
    <div>
      <h2>{question}</h2>
      <form>
       {
        answers.map((props, index)=>{
          return(
            <div key={index} style={{display: 'flex'}}>
              <p className='answer-laebl'>{props.label}</p>

              <input 
                type="radio"
                name="x"
                onClick={()=>{
                  setSelectedAnswer(props.id);
                  const has = responses.find((item) => item.question === question);
                  if(!has)
                    setResponses([...responses, { question, answer: props.id}]);
                }} 
              />
            </div>
          )
        })
       }
      </form>
    </div>
  )
}