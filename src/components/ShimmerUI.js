
function ShimmerUI (){
    return (
        <div className="flex flex-wrap justify-around bg-neutral-200">
            {/* {Array(15).fill().map((e,index)=><div className="shimmer-card" key={index}></div>)} */}
            {[...new Array(14)].map((e,index)=><div className="m-5 w-40 h-40 border bg-neutral-500 relative" key={index}>
                <div className="shimmer "></div>
            </div>)}
            
        </div>
    );
}

export default ShimmerUI;