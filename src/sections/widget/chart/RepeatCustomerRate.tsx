import { useState, MouseEvent } from 'react';

// material-ui
import { Chip, ListItemButton, Menu, Stack, Typography } from '@mui/material';

// project-imports
import RepeatCustomerChart from './RepeatCustomerChart';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

// assets
import { More } from 'iconsax-react';

// ==============================|| CHART - REPEAT CUSTOMER RATE ||============================== //

const RepeatCustomerRate = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainCard>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <Typography variant="h5">Registro de cliente</Typography>
        <IconButton
          color="secondary"
          id="wallet-button"
          aria-controls={open ? 'wallet-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <More />
        </IconButton>
        <Menu
          id="wallet-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'wallet-button',
            sx: { p: 1.25, minWidth: 150 }
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <ListItemButton onClick={handleClose}>Hoje</ListItemButton>
          <ListItemButton onClick={handleClose}>Semanalmente</ListItemButton>
          <ListItemButton onClick={handleClose}>Mensalmente</ListItemButton>
        </Menu>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={0.5} sx={{ mt: 1 }}>
        <Typography variant="subtitle1">5.44%</Typography>
        <Chip color="success" variant="filled" label="+2.6%" size="small" sx={{ bgcolor: 'success.main', borderRadius: 1 }} />
      </Stack>
      <RepeatCustomerChart />
    </MainCard>
  );
};

export default RepeatCustomerRate;
