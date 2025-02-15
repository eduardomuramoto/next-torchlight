import * as React from "react"

export default function CornerComponent({ className, color: color }: { className: string, color: string }) {
  return (
    <svg width="182" height="111" viewBox="0 0 182 111" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path className={color} d="M182.481 -2.00067V102.091C182.361 99.4702 182.121 96.7049 181.641 94.4985C178.171 78.4369 173.961 74.4384 168.151 64.9093C154.041 41.766 116.551 25.2226 99.6114 21.7059C76.0114 16.8113 8 5.00122 0 -2.00067C0 -2.00067 29.5758 -1.67459 99.6109 -2.00188C150.478 -2.2396 154.5 -2.00157 182.481 -2.00067Z" fill="#FF4081" />

    </svg>


  )
}
