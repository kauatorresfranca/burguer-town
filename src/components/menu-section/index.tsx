import * as S from './styles'
import MenuItem from '../menu-item'

type MenuItemType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

type MenuSectionProps = {
  Sections: {
    name: string;
    items: MenuItemType[];
  }[];
};

const MenuSection = ({ Sections }: MenuSectionProps) => {
  return (
    <>
      {Sections.map(section => (
        <S.MenuSection key={section.name}>
          <S.MenuSectionTitle>{section.name}</S.MenuSectionTitle>
          <S.MenuSectionList>
            {section.items.map(item => (
              <MenuItem key={item.id} title={item.title} description={item.description} price={item.price} image={item.image} />
            ))}
          </S.MenuSectionList>
        </S.MenuSection>
      ))}
    </>
  );
};

export default MenuSection;