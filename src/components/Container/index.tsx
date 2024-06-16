interface ContainerProps {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <div className="w-full h-full gap-2 bg-gray-100 flex flex-col items-center sm:w-96 sm:h-96 sm:rounded-xl">
            {children}
        </div>
    )    
}