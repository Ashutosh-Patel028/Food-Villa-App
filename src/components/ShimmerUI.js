
function ShimmerUI (){
    return (
        <div className="restraunt-list">
            {Array(15).fill().map(e=><div className="shimmer-card"></div>)}
            
        </div>
    );
}

export default ShimmerUI;