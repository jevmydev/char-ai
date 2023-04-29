interface LinesProps {
    direction: string;
}

export const Lines = ({ direction }: LinesProps) => {
    return (
        <div className={`flex flex-col gap-4 p-4 absolute w-full bottom-0 ${direction}`}>
            <div className="w-1/2 p-1 bg-zinc-900"></div>
            <div className="w-1/2 p-1 bg-zinc-900"></div>
            <div className="w-1/2 p-1 bg-green-300"></div>
        </div>
    );
};

export default Lines;
