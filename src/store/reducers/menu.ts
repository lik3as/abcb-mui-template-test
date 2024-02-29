import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// types
import { MenuProps } from 'types/menu';

// initial state
const initialState: MenuProps = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  selectedID: null,
  drawerOpen: false,
  componentDrawerOpen: true,
  menu: {},
  error: null
};

// ==============================|| SLICE - MENU ||============================== //

const data: any = {
  dashboard: {
    id: "group-dashboard",
    title: "NAVEGAÇÃO",
    type: "group",
    icon: "dashboard",
    children: [
      {
        id: "dashboard",
        title: "dashboard",
        type: "collapse",
        icon: "dashboard",
        url: "/dashboard/home"
      },
      {
        id: "schedules",
        title: "agendamentos",
        type: "collapse",
        icon: "schedules",
        target: true,
        children: [
          {
            id: "manage-schedules",
            title: "Gerenciar Agendamentos",
            type: "item",
            breadcrumbs: false
          },
          {
            id: "schedule-report",
            title: "Relatório de Agendamentos",
            type: "item",
            breadcrumbs: false
          }
        ]
      },
      {
        id: "customers",
        title: "Clientes",
        type: "collapse",
        icon: "customers",
        target: true,
        children: [
          {
            id: "manage-customers",
            title: "Gerenciar Clientes",
            type: "item",
            breadcrumbs: false
          },
          {
            id: "customer-report",
            title: "Relatório de Clientes",
            type: "item",
            breadcrumbs: false
          }
        ]
      },
      {
        id: "partners",
        title: "Parceiros",
        type: "collapse",
        icon: "partners",
        target: true,
        children: [
          {
            id: "manage-partners",
            title: "Gerenciar Parceiros",
            type: "item",
            breadcrumbs: false
          },
          {
            id: "partners-report",
            title: "Relatório de Parceiros",
            type: "item",
            breadcrumbs: false
          }
        ]
      },
      {
        id: "financial",
        title: "Financeiro",
        type: "collapse",
        icon: "financial",
        target: true,
        children: [
          {
            id: "financial-extract",
            title: "Extrato Financeiro",
            type: "item",
            breadcrumbs: false
          },
          {
            id: "bank-accounts",
            title: "Contas Bancárias",
            type: "item",
            breadcrumbs: false
          }
        ]
      },
      {
        id: "system",
        title: "Sistema",
        type: "collapse",
        icon: "system",
        target: true,
        children: [
          {
            id: "settings",
            title: "Configurações",
            type: "item",
            breadcrumbs: false
          },
          {
            id: "infra",
            title: "Infraestrutura",
            type: "item",
            breadcrumbs: false
          }
        ]
      },

    ]
  }
}


export const fetchMenu = createAsyncThunk('', async () => {
  const response = data;
  return response;
});

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeID(state, action) {
      state.selectedID = action.payload;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },

    hasError(state, action) {
      state.error = action.payload;
    }
  },

  extraReducers(builder) {
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.menu = action.payload.dashboard;
    });
  }
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer, activeID } = menu.actions;
