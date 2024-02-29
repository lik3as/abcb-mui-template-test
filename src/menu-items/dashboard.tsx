// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import { useSelector } from 'store';

// type
import { NavItemType } from 'types/menu';
import { Home3, HomeTrendUp, VideoTime, Profile2User, Cpu, User, DollarSquare } from 'iconsax-react';

const icons = {
  navigation: Home3,
  dashboard: HomeTrendUp,
  schedules: VideoTime,
  customers: Profile2User,
  system: Cpu,
  partners: User,
  financial: DollarSquare
};

// ==============================|| MENU ITEMS - API ||============================== //

export const Menu = () => {
  const { menu } = useSelector((state) => state.menu);

  const SubChildrenLis = (SubChildrenLis: NavItemType[]) => {
    return SubChildrenLis?.map((subList: NavItemType) => {
      return {
        ...subList,
        title: <FormattedMessage id={`${subList.title}`.charAt(0).toUpperCase() + `${subList.title}`.slice(1)} />,
        // @ts-ignore
        icon: icons[subList.icon]
      };
    });
  };

  const itemList = (subList: NavItemType) => {
    let list: NavItemType = {
      ...subList,
      title: <FormattedMessage id={`${subList.title}`.charAt(0).toUpperCase() + `${subList.title}`.slice(1)} />,
      // @ts-ignore
      icon: icons[subList.icon]
    };

    if (subList.type === 'collapse') {
      list.children = SubChildrenLis(subList.children!);
    }
    return list;
  };

  const withoutMenu = menu?.children?.filter((item: NavItemType) => item.id !== 'no-menu');
  const ChildrenList: NavItemType[] | undefined = withoutMenu?.map((subList: NavItemType) => {
    return itemList(subList);
  });

  const menuList: NavItemType = {
    ...menu,
    title: <FormattedMessage id={`${menu.title}`} />,
    // @ts-ignore
    icon: icons[menu.icon],
    children: ChildrenList
  };

  return menuList;
};
