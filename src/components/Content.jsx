import Part1 from './parts/Part1' 
import Part2 from './parts/Part2' 
import Part3 from './parts/Part3' 
const Content = (props) => {
    return (
      <div>
        <Part1 part1={props.part1} exercises1={props.exercises1}/>
        <Part2 part2={props.part2} exercises2={props.exercises2}/>
        <Part3 part3={props.part3} exercises3={props.exercises3}/>
      </div>
    )
  }
export default Content