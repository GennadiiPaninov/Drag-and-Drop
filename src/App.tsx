import s from './app.module.css'
import {ChangeEvent,  useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import {addMentorItem, addUserItem} from "./feature/DraggebleItem/model/draggeble.reducer";
import DropZone from "./feature/DraggebleItem/ui/dropZone/DropZone";
import {selectItems} from "./feature/DraggebleItem/model/selectors";
import DraggableItem from "./feature/DraggebleItem/ui/draggableItem/DraggableItem";
function App() {
    const tacks = useSelector(selectItems);
    const dispatch = useDispatch()
    const [userText, setUserText] = useState<string>('')
    const [mentorsText, setMentorsText] = useState<string>('')
    const addUserTackCallback =()=>{
        if(userText.length > 1){
            dispatch(addUserItem({data:userText}))
            setUserText('')
        }

    }
    const addMentorTackCallback =()=>{
        dispatch(addMentorItem({data:mentorsText}))
        setMentorsText('')
    }
    const handleChangeUserText =(e: ChangeEvent<HTMLInputElement>)=>{

        setUserText(e.currentTarget.value)
    }
    const handleChangeMentorText =(e: ChangeEvent<HTMLInputElement>)=>{
        setMentorsText(e.currentTarget.value)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.users}>
                <h1>USERS</h1>
                <div className={s.panelContainer}>
                    <input type="text" onChange={handleChangeUserText} value={userText}/>
                    <button onClick={addUserTackCallback}>send</button>
                </div>

                <DropZone dropZoneName={'userZone'}>
                    {tacks.userItem && tacks.userItem.map((el)=>{
                        return <DraggableItem id={el.id} text={el.value} description={"User"}/>
                    })
                    }
                </DropZone>
            </div>
            <div className={s.mentors}>
                <h1>Mentors</h1>
                <div className={s.panelContainer}>
                    <input type="text" onChange={handleChangeMentorText} value={mentorsText}/>
                    <button onClick={addMentorTackCallback}>send</button>
                </div>
                <DropZone dropZoneName={'mentorZone'}>
                    {tacks.mentorItem && tacks.mentorItem.map((el)=>{
                        return <DraggableItem id={el.id} text={el.value} description={"Mentor"}/>
                    })
                    }
                </DropZone>
            </div>
        </div>
    );

}

export default App
