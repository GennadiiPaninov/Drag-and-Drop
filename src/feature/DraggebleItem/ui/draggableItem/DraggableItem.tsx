import {useState} from "react";
import s from './DraggableItem.module.css'

type draggableItemProps = {
    id: string
    text: string
}
const DraggableItem = ({ id, text }: draggableItemProps) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text/plain', id);
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{ opacity: isDragging ? 0.5 : 1 }}
            className={s.container}
        >
            {text}
        </div>
    );
};

export default DraggableItem;