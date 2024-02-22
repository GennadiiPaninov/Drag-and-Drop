import s from './app.module.css'
import { useDispatch , useSelector } from "react-redux";
import {addMentorItem, addUserItem} from "./feature/DraggebleItem/model/draggeble.reducer";
import DropZone from "./feature/DraggebleItem/ui/dropZone/DropZone";
import {selectItems} from "./feature/DraggebleItem/model/selectors";
import DraggableItem from "./feature/DraggebleItem/ui/draggableItem/DraggableItem";
import {Panel} from "./components/panel/Panel";
import 'normalize.css';

function App() {
    const tacks = useSelector(selectItems);
    const dispatch = useDispatch()
    const addUserTackCallback =(name: string)=>{
            dispatch(addUserItem({data:name}))
    }
    const addMentorTackCallback =(name: string)=>{
            dispatch(addMentorItem({data:name}))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.users}>
                <h1>USERS</h1>
                <div className={s.panelContainer}>
                    <Panel addNameCallback={addUserTackCallback}/>
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
                    <Panel addNameCallback={addMentorTackCallback}/>
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
