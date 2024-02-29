// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Box from "@mui/system/Box"

// project-imports
import DrawerHeaderStyled from './DrawerHeaderStyled';
import logo from "assets/images/logo.webp"

import { DRAWER_WIDTH, HEADER_HEIGHT } from 'config';
import useConfig from 'hooks/useConfig';

// types
import { MenuOrientation } from 'types/config';

// ==============================|| DRAWER HEADER ||============================== //

interface Props {
  open: boolean;
}

const DrawerHeader = ({ open }: Props) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation } = useConfig();
  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  return (
    <DrawerHeaderStyled
      theme={theme}
      open={open}
      sx={{
        minHeight: isHorizontal ? 'unset' : HEADER_HEIGHT,
        width: isHorizontal ? { xs: '100%', lg: DRAWER_WIDTH + 50 } : 'inherit',
        paddingTop: isHorizontal ? { xs: '10px', lg: '0' } : '8px',
        paddingBottom: isHorizontal ? { xs: '18px', lg: '0' } : '8px',
        paddingLeft: isHorizontal ? { xs: '24px', lg: '0' } : open ? '24px' : 0
      }}
    >
     <Box
        component="img"
        sx={{
          height: 75,
          width: 180,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          marginLeft: "20px"
        }}
        alt="ABCB"
        src={logo}
      /> 
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
