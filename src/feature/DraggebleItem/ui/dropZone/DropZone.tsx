import React, {ReactNode, useState} from 'react';
import s from './DropZone.module.css'
import { useDispatch  } from "react-redux";
import {dragItem} from "../../model/draggeble.reducer";
type DropZoneType ={
    children?: ReactNode
    dropZoneName: string
}

const DropZone = ({ children, dropZoneName }: DropZoneType) => {
    const dispatch = useDispatch()

    const [isOver, setIsOver] = useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(true);
    };

    const handleDragLeave = () => {
        setIsOver(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsOver(false);
        const itemId = event.dataTransfer.getData('text/plain');
        dispatch(dragItem({ id:itemId, dropZoneName:dropZoneName }))
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{ backgroundColor: isOver ? 'yellow' : 'transparent' }}
            className={s.container}
        >
            {children}
        </div>
    );
};

export default DropZone;