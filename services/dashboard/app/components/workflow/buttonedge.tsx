import React, { useState } from 'react';
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from 'reactflow';
//Shadcn
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "#app/components/ui/dialog.tsx"
import { Button } from "#app/components/ui/button.tsx"
//React-Icons
import { FaPaperPlane } from 'react-icons/fa'

const onEdgeClick = (evt: any) => { //Stop the click event from triggering further event listeners
    evt.stopPropagation();
};

//Custom Button Edge component
export default function CustomEdge({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    data,
}: EdgeProps) {
    //Calculate path and label coordinates
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    //Extracting labels from nodes
    const { sourceLabel, targetLabel } = data;

    //useState hook to manage form values
    const [formValues, setFormValues] = useState({ 
        nombre: '', 
        apellido: '', 
        fuente: sourceLabel, 
        objetivo: targetLabel,
    });

    //Function to manage input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    //Function to manage submit event
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //prevents page to refresh
        console.log(formValues);
    };

    return (
        <>
        <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
        <EdgeLabelRenderer>
            <div
            style={{
                position: 'absolute',
                transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                fontSize: 12,
                // everything inside EdgeLabelRenderer has no pointer events by default
                // if you have an interactive element, set pointer-events: all
                pointerEvents: 'all',
            }}
            className="nodrag nopan"
            >
            <Dialog>
                <DialogTrigger asChild> 
                    <Button className="edgebutton" onClick={(event) => onEdgeClick(event)}>
                        <FaPaperPlane></FaPaperPlane>
                    </Button >
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Formulario</DialogTitle>
                        <DialogDescription>
                            Rellena los siguientes campos.
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center text-black'>
                            <input name="nombre" className='shadow w-full py-2 px-3 mb-4' onBlur={handleInputChange} type="text" placeholder="Nombre"/>
                            <input name="apellido" className='shadow w-full py-2 px-3 mb-4' onBlur={handleInputChange} type="text" placeholder="Apellido" />
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="submit" variant="secondary">
                                        Enviar
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
            </div>
        </EdgeLabelRenderer>
        </>
    );
}