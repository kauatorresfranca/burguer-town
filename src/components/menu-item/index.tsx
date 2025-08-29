import * as  S from './styles'

type MenuItemProps = {
    title: string;
    description: string;
    price: number;
    image: string;
}

const MenuItem = ({ title, description, price, image }: MenuItemProps) => {
    return (
        <S.MenuItem>
            <S.MenuItemImage src={image} alt={title} />
            <S.MenuItemTitleGroup>
                <div>
                    <S.MenuItemTitle>{title}</S.MenuItemTitle>
                    <S.MenuItemDescription>{description}</S.MenuItemDescription>
                </div>
                <S.MenuItemPrice>R$ {price.toFixed(2).replace('.', ',')}</S.MenuItemPrice>
            </S.MenuItemTitleGroup>
        </S.MenuItem>
    )
}

export default MenuItem
