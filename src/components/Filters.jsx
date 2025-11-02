
const Filters = () => {
    
  return (
    <div>
    <div
       style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"10px",
        paddingLeft:"50px",
        marginBottom: "20px",
       }}
    >
      <div
        style={{
            display:"flex",
            alignItems:"center",
            gap: "50px"
        }}>
          <strong style={{fontSize:"14px"}}>3425 ITEMS</strong>  
          <button
            style={{
                background:"none",
                border:"none",
                color:"#666",
                cursor:"pointer",
                fontSize:"14px",
                textDecoration: "underline",
            }}
           
    
          >
            HIDE FILTER
            </button>
            </div>
            <div>
            <select
              style={{
                background:"transparent",
                border:"1px solid #fff",
                color:"#000",
                cursor:"pointer",
                fontSize:"14px",
                borderRadius:"8px",
                height:"40px",
                borderColor:"#fff",
              }}
            >
             <option value="">RECOMMENDED</option>
             <option value="">NEWEST FIRST</option>
             <option value="">POPULAR</option>
             <option value="">PRICE: HIGH TO LOW</option>
             <option value="">PRICE: LOW TO HIGH</option>
            </select>
      </div>
    </div>
     <hr className="horizontal-line"/>
    </div>
    
  )
}

export default Filters
