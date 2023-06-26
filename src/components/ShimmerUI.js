function ShimmerUI (){
    return (
        <div className="flex flex-wrap justify-around bg-neutral-200">
            {/* {Array(15).fill().map((e,index)=><div className="shimmer-card" key={index}></div>)} */}
            {[...new Array(15)].map((e,index)=>{
                return(
                    <div key={index} className="card my-4 mx-7 w-52 h-56 bg-white rounded-lg shadow-2xl p-4 shadow-slate-400">
                        <div className="header w-full h-4/6 rounded-md mb-1.5 bg-slate-200 animate-pulse"></div>
                        <div className="body mb-3">
                            <div className="w-full h-2 bg-slate-200 rounded-lg mb-1 animate-pulse"></div>
                            <div className="w-full h-2 bg-slate-200 rounded-lg mb-1 animate-pulse"></div>
                            <div className="w-4/5 h-2 bg-slate-200 rounded-lg mb-0 animate-pulse"></div>
                        </div>
                        <div className="footer">
                            <div className="w-full h-2 bg-slate-200 rounded-lg mb-1 animate-pulse"></div>
                            <div className="w-4/5 h-2 bg-slate-200 rounded-lg mb-0 animate-pulse"></div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default ShimmerUI;