import * as React from "react"
import { SVGProps } from "react"
const LegalComponent = (props: SVGProps<SVGSVGElement>) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_2"
    viewBox="0 0 104 104"
    {...props}
  >
    <defs>
      <style>{".cls-2{fill:#013477}"}</style>
    </defs>
    <g id="Layer_1-2">
      <path
        d="m18.21 103.88 28.1-9.85c.49-.14.74-.74.52-1.26l-7.16-18.81c-.27-.62.14-1.31.75-1.28l51.61 2.02c.6.03 1-.64.76-1.25L66.28 2.25c-.24-.62-.98-.76-1.37-.26l-34.57 45.4c-.35.45-1 .39-1.3-.13l-3.83-10.78c-.23-.39-.69-.54-1.06-.34L9.77 42.05c-.4.22-.55.75-.36 1.2l2.68 7.5c.27.63.29 1.22-.33 1.18l-4.74 1.18c-.58-.04-1 .58-.8 1.2l11.01 48.97c.15.45.58.7.99.59Z"
        style={{
          fill: "#ff8725",
        }}
      />
      <path
        d="M14.46 103.99c-.24.03-.48-.03-.69-.16-.29-.18-.5-.48-.57-.83-.1-.47-1.5-7.27-2.65-13.89-3.69-1.36-7.11-5.3-8.67-10.56-.19-.65.14-1.35.74-1.54.61-.2 1.25.17 1.44.83 1.14 3.83 3.46 6.9 6.01 8.37-.55-3.39-.96-6.46-1-8.25-.13-5.29.08-9.41 3.95-10.2.57-.12 1.45-.08 2.42.73 2.1 1.76 3.42 6.25 3.65 9.77.28 4.34.63 9.74-3.75 11.07-.78.24-1.58.33-2.38.29.82 4.65 1.74 9.27 2.19 11.51l17.74-6.71-3.14-4.2c-.1-.13-.17-.28-.21-.44l-.27-.09c-1.54-.52-2.64-1.57-3.18-3.01-.56-1.51-.39-3.14.14-4.7-1.23-.53-2.34-1.31-3.14-2.39-.83-1.13-1.16-2.55-.96-4.09.1-.79.34-1.58.67-2.34-.71-.73-1.2-1.67-1.45-2.78-.6-2.71.97-5.95 4.02-8.27 2.84-2.16 7.23-3.51 11.05-.84 5.56 3.88 8.39 15.37 9.14 18.84l35.86 1.31L55.85 15.1 25.29 54.02c-.26.33-.67.48-1.06.41-.4-.08-.73-.38-.88-.79l-3.62-10.18-12.25 5.19 2.9 7.35c.14.35.12.75-.04 1.08-.17.33-.47.56-.81.61L2.87 58.8l3.74 8.13c.28.62.06 1.36-.51 1.65-.56.3-1.25.04-1.54-.58L.12 58.36c-.16-.35-.16-.77 0-1.11.16-.35.47-.59.83-.65l6.75-1.13-2.79-7.06c-.12-.31-.12-.65 0-.96.12-.31.34-.55.62-.67l14.4-6.11c.28-.12.6-.11.89.03.28.14.5.39.61.7l3.34 9.4L54.3 13.21c.47-.6 1.18-.88 1.91-.75s1.33.66 1.62 1.41L83.98 81.7c.21.54.14 1.14-.17 1.61-.3.44-.78.68-1.29.64l-37.91-1.38c-.54-.02-1-.44-1.1-1.02-.03-.14-2.7-14.28-8.31-18.19-2.86-2-6.26-.89-8.5.8-2.21 1.68-3.5 4.02-3.13 5.69.09.41.24.78.43 1.09.98-1.48 2.1-2.67 2.82-3.19.5-.37 3.11-2.17 5.34-1.59.86.23 1.54.78 1.98 1.61.48.91.61 1.88.37 2.82-.44 1.76-2.06 2.96-2.99 3.51-.9.54-4.1 1.35-6.74.35-.19.48-.33.98-.39 1.46-.12.87.04 1.58.47 2.17.56.76 1.4 1.31 2.37 1.68 1.25-2.25 2.94-4.09 3.69-4.75 1.1-.98 3.04-1.87 4.68-1.47.99.24 1.77.9 2.24 1.91.57 1.21.68 2.42.33 3.51a4.3 4.3 0 0 1-.64 1.24c.86-.04 1.49.2 1.93.49.87.58 1.38 1.62 1.39 2.85.02 1.81-1.06 3.49-3.32 5.16-.8.58-2.82 1.29-4.96 1.4l3.12 4.16c.24.31.32.73.22 1.12-.1.39-.36.69-.71.82l-20.48 7.74c-.08.03-.17.05-.25.06ZM32.57 87.6c1.63-.12 3.16-.61 3.65-.97 1.57-1.15 2.36-2.2 2.34-3.11 0-.25-.05-.59-.27-.73-.34-.22-1.18-.2-2.52.54-1.35.74-2.47 2.64-3.2 4.27Zm-4.12-4.95c-.42 1.13-.58 2.24-.25 3.14.27.74.83 1.24 1.71 1.54.07.02.14.05.21.07.52-1.32 1.4-3.18 2.62-4.62-1.29.18-2.81.17-4.3-.12ZM12.53 87.1c.73.1 1.46.06 2.16-.15 2.44-.74 2.43-3.87 2.12-8.56-.21-3.29-1.45-6.85-2.75-7.95-.23-.19-.42-.27-.58-.24-1.63.33-2.28 1.48-2.13 7.74.05 1.89.54 5.39 1.18 9.16Zm17.1-6.78c1.75.21 3.47 0 4.4-.44 1.06-.51 1.76-1.14 1.98-1.8.14-.45.08-.96-.2-1.56-.16-.33-.35-.51-.66-.58-.78-.19-2.05.36-2.75.98-.73.66-1.85 1.94-2.76 3.4Zm-3.66-8.07c1.82.47 4.01-.09 4.42-.33 1.04-.62 1.75-1.38 1.92-2.03.08-.31.03-.59-.15-.93a.753.753 0 0 0-.49-.4c-.89-.23-2.48.47-3.53 1.24-.46.34-1.36 1.27-2.16 2.45ZM87 41.67c-.57.06-1.13-.29-1.33-.89-.23-.69.1-1.45.75-1.68l12.55-4.6c.65-.24 1.37.13 1.6.82.23.69-.1 1.45-.75 1.68l-12.55 4.6c-.09.03-.18.05-.27.06ZM79.14 27.34c-.3.03-.62-.05-.89-.26-.56-.44-.68-1.27-.28-1.86l7.84-11.32a1.2 1.2 0 0 1 1.75-.27c.56.44.68 1.27.28 1.86L80 26.81c-.21.31-.53.49-.86.52ZM65.22 16.32c-.15.02-.3 0-.45-.04-.67-.18-1.08-.91-.92-1.62L67.03.98c.16-.71.84-1.13 1.51-.95.67.18 1.08.91.92 1.62l-3.18 13.68c-.13.55-.56.93-1.06.98ZM102.9 59.27c-.08 0-.17.01-.25 0l-13.29-1.3c-.69-.07-1.2-.71-1.15-1.44.05-.73.66-1.26 1.34-1.2l13.29 1.3c.69.07 1.2.71 1.15 1.44-.05.64-.52 1.13-1.09 1.2ZM99.81 80.79c-.22.02-.44 0-.65-.11l-12.2-5.88c-.63-.3-.92-1.09-.64-1.76.28-.67 1.02-.96 1.65-.65l12.2 5.88c.63.3.92 1.09.64 1.76-.18.44-.57.72-.99.77Z"
        className="cls-2"
      />
    </g>
  </svg>
  )
export default LegalComponent