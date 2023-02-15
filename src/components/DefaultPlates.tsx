import { button } from '../constants/style'


interface Props {
    id: string[];
    func: (arg0:string) => void;
}

const DefaultPlates = ({id, func}:Props) => {
    const color1: string = id[0];
    const color2: string = id[1];
  return (
    <div className="flex flex-row gap-5">
        <div id={`${color1}`} className={`${button.red} bg-${color1}Card cursor-pointer`} onClick={() => func(id[0])}></div>
        <div id={`${color2}`} className={`${button.red} bg-${color2}Card cursor-pointer`} onClick={() => func(id[1])}></div>
    </div>
  )
}

export default DefaultPlates