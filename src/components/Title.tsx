import { type ReactNode } from 'react'

interface Props {
  text: string;
  children?: ReactNode;
}
const Title= ({text, children}: Props) => {
  return (
    <div className="pageTitle container py-5 px-4">
      <h2>
        {text}
        {children}
      </h2>
    </div>
  )
}

export default Title
