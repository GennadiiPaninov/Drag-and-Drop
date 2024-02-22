import {ChangeEvent, useState} from "react";

type PanelProps = {
    addNameCallback: (name: string) => void
}
export const Panel = ({addNameCallback}:PanelProps) => {
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
        <div>
            <input type="text" onChange={handleChangeText} value={text}/>
            <button onClick={addNameHandler}>send</button>
        </div>
    );
};
