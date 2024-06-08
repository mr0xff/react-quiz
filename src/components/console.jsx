import { useContext, Fragment } from "react";
import questions from "./questions";
import ContainerContext from "./container-context";

export default function Console({data}){
  const { isDone } = useContext(ContainerContext);

  return(
    <div>
      {data.responses.map((props, index)=>{
        const data = questions.find((item) => item.label === props.question);

        return(
          <Fragment key={index}>
            <h3>{props.question}</h3>
            <p style={isDone ? {
              backgroundColor: data.answers.find((item) => item.id === props.answer).isCorrect ? '#54ef54': "#ff7986"
            }: {}}>
              {data.answers.find((item) => item.id === props.answer).label}
            </p>
          </Fragment>
        )
      })}
    </div>
  )
}