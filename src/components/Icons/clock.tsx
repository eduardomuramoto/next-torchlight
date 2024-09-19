import * as React from "react"
import { SVGProps } from "react"
const ClockComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M12.5 3C17.7469 3 22 7.25315 22 12.5C22 17.7469 17.7469 22 12.5 22C7.25315 22 3 17.7469 3 12.5C3 7.25315 7.25315 3 12.5 3ZM12.5 4.9C10.4844 4.9 8.55126 5.70071 7.12599 7.12599C5.70071 8.55126 4.9 10.4844 4.9 12.5C4.9 14.5156 5.70071 16.4487 7.12599 17.874C8.55126 19.2993 10.4844 20.1 12.5 20.1C14.5156 20.1 16.4487 19.2993 17.874 17.874C19.2993 16.4487 20.1 14.5156 20.1 12.5C20.1 10.4844 19.2993 8.55126 17.874 7.12599C16.4487 5.70071 14.5156 4.9 12.5 4.9ZM12.5 6.8C12.7327 6.80003 12.9573 6.88546 13.1312 7.04008C13.305 7.1947 13.4161 7.40776 13.4433 7.63885L13.45 7.75V12.1067L16.0216 14.6784C16.192 14.8493 16.2909 15.0787 16.2983 15.32C16.3057 15.5612 16.2209 15.7962 16.0613 15.9773C15.9017 16.1583 15.6791 16.2718 15.4388 16.2947C15.1986 16.3176 14.9586 16.2481 14.7676 16.1005L14.6784 16.0216L11.8284 13.1716C11.6807 13.0239 11.5859 12.8316 11.5585 12.6244L11.55 12.5V7.75C11.55 7.49804 11.6501 7.25641 11.8282 7.07825C12.0064 6.90009 12.248 6.8 12.5 6.8Z" fill="#656572"/>
  </svg>
  

)
export default ClockComponent
