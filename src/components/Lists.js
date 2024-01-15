import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({ todoData, setTodoData }) => {
    const handleEnd = (result) => {
        console.log("result", result);

        if (!result.destination) return;
        const newTodoData = todoData;

        const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    };

    const calculateTotalCost = () => {
        return todoData.reduce((total, item) => total + item.cost, 0);
    };

    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <List
                                            key={data.id}
                                            id={data.id}
                                            title={data.title}
                                            cost={data.cost}  
                                            completed={data.completed}
                                            todoData={todoData}
                                            setTodoData={setTodoData}
                                            provided={provided}
                                            snapshot={snapshot}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <div className="mt-4 text-lg"> 총지출: {calculateTotalCost()}원</div> {/* Added: Display total cost */}
        </div>
    );
});

export default Lists;