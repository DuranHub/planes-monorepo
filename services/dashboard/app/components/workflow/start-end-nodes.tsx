import { Handle, Position} from 'reactflow'

export const StartNode = () => {
    return (
        <div className='w-10 h-10 flex items-center justify-end'>
            <div className="w-5 h-5 border-2 border-black rounded-full bg-black">
                <Handle type="source" position={Position.Right} />
            </div>
        </div>
    )
}

export const EndNode = () => {
    return (
        <div className='w-10 h-10 flex items-center justify-start'>
            <div className="w-5 h-5 border-2 border-black rounded-full bg-black">
                <Handle type="target" position={Position.Left} />
            </div>
        </div>
    )
}