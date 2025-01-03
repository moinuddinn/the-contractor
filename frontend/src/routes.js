import { exact } from 'prop-types';
import React from 'react';

// Direct imports instead of lazy loading
import Dashboard from './views/dashboard/Dashboard';
import Employees from './views/employees/Employees';
import Colors from './views/theme/colors/Colors';
import Typography from './views/theme/typography/Typography';

// Base
import Accordion from './views/base/accordion/Accordion';
import Breadcrumbs from './views/base/breadcrumbs/Breadcrumbs';
import Cards from './views/base/cards/Cards';
import Carousels from './views/base/carousels/Carousels';
import Collapses from './views/base/collapses/Collapses';
import ListGroups from './views/base/list-groups/ListGroups';
import Navs from './views/base/navs/Navs';
import Paginations from './views/base/paginations/Paginations';
import Placeholders from './views/base/placeholders/Placeholders';
import Popovers from './views/base/popovers/Popovers';
import Progress from './views/base/progress/Progress';
import Spinners from './views/base/spinners/Spinners';
import Tabs from './views/base/tabs/Tabs';
import Tables from './views/base/tables/Tables';
import Tooltips from './views/base/tooltips/Tooltips';

// Buttons
import Buttons from './views/buttons/buttons/Buttons';
import ButtonGroups from './views/buttons/button-groups/ButtonGroups';
import Dropdowns from './views/buttons/dropdowns/Dropdowns';

// Forms
import ChecksRadios from './views/forms/checks-radios/ChecksRadios';
import FloatingLabels from './views/forms/floating-labels/FloatingLabels';
import FormControl from './views/forms/form-control/FormControl';
import InputGroup from './views/forms/input-group/InputGroup';
import Layout from './views/forms/layout/Layout';
import Range from './views/forms/range/Range';
import Select from './views/forms/select/Select';
import Validation from './views/forms/validation/Validation';

import Charts from './views/charts/Charts';

// Icons
import CoreUIIcons from './views/icons/coreui-icons/CoreUIIcons';
import Flags from './views/icons/flags/Flags';
import Brands from './views/icons/brands/Brands';

// Notifications
import Alerts from './views/notifications/alerts/Alerts';
import Badges from './views/notifications/badges/Badges';
import Modals from './views/notifications/modals/Modals';
import Toasts from './views/notifications/toasts/Toasts';

import Widgets from './views/widgets/Widgets';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/employees', name: 'Employees', element: Employees, exact: true },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
];

export default routes;
