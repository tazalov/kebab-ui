import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    height={height}
    ref={ref}
    viewBox="0 0 24 24"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M14 18.3413C14 19.2403 13.084 20.0003 12 20.0003C10.916 20.0003 10 19.2403 10 18.3413V18.0003H14V18.3413ZM20.521 15.2073L18.72 13.4043V8.93629C18.72 5.45529 16.218 2.49929 12.899 2.05929C10.978 1.80429 9.038 2.39029 7.583 3.66629C6.119 4.94829 5.28 6.79329 5.28 8.72729L5.279 13.4043L3.479 15.2083C3.01 15.6773 2.871 16.3773 3.125 16.9903C3.38 17.6033 3.973 18.0003 4.637 18.0003H8V18.3413C8 20.3593 9.794 22.0003 12 22.0003C14.206 22.0003 16 20.3593 16 18.3413V18.0003H19.362C20.026 18.0003 20.619 17.6043 20.873 16.9903C21.128 16.3773 20.989 15.6773 20.521 15.2073Z"
      fill="currentColor"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
