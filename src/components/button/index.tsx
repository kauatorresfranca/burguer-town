import type { JSX } from 'react'
import * as S from './styles'

type Props = {
    children: JSX.Element | string
}

const Button = ({ children, ...props }: Props) => {
    return (
        <S.Button {...props}>
            {children}
        </S.Button>
    )
}

export default Button;
