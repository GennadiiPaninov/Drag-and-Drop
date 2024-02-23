import {ChangeEvent, useState} from "react";
import {Button} from "../button/Button";

type PanelProps = {
    addNameCallback: (name: string) => void
    className?:string
}
export const Panel = ({addNameCallback, className}:PanelProps) => {
    const [text, setText] = useState<string>('')
    const handleChangeText =(e: ChangeEvent<HTMLInputElement>)=>{
        setText(e.currentTarget.value)
    }
    const addNameHandler=()=>{
        if(text.length > 1){
        addNameCallback(text)
        setText('')
        }
    }
    return (
        <div className={className}>
            <input type="text" onChange={handleChangeText} value={text}/>
            <Button onClick={addNameHandler}>send</Button>
        </div>
    );
};
