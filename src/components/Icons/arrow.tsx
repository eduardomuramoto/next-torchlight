import * as React from "react"

const ArrowComponent = ({className, color = "stroke-background"}:{className: string, color?:string}) => (
  <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M5.83268 1.25L10.4993 5.91667L15.166 10.5833M15.166 10.5833L5.83268 19.75L15.166 10.5833ZM15.166 10.5833H0.999512H15.166Z" fill="#F6FAF9"/>
<path className={color + " group-hover:stroke-white transition-all duration-150 ease-in-out"} d="M5.83268 1.25L10.4993 5.91667L15.166 10.5833M15.166 10.5833L5.83268 19.75M15.166 10.5833H0.999512" stroke="#013477" stroke-width="1.33333" stroke-linecap="square"/>
</svg>

)
export default ArrowComponent
