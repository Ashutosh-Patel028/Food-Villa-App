
function ShimmerUI (){
    return (
        <div className="restraunt-list">
            {/* {Array(15).fill().map((e,index)=><div className="shimmer-card" key={index}></div>)} */}
            {[...new Array(15)].map((e,index)=><div className="shimmer-card" key={index}>
                
            </div>)}
            
        </div>
    );
}

export default ShimmerUI;