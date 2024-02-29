// material-ui
import {Grid, LinearProgress, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';


// =========================|| DATA WIDGET - ADD NEW TASK ||========================= //

const ProjectRelease = () => {
  return (
    <MainCard title="Desempenho Diário">
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography>Concluído</Typography>
              <Typography>72%</Typography>
            </Stack>
            <LinearProgress variant="determinate" value={72} />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItemButton sx={{ flexWrap: 'wrap', rowGap: 1 }}>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText primary="Maria B Eunice" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText primary="João C Marcos" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot />
              </ListItemIcon>
              <ListItemText primary="Antônio A Oliveira" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot color="success" />
              </ListItemIcon>
              <ListItemText primary="Maria S Rosa" />
            </ListItemButton>
          </List>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ProjectRelease;
