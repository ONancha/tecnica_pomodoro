import { useState, useEffect } from 'react';

import styles from './styles.module.css';

import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

type MenuItem = {
  icon: React.ElementType;
  ariaLabel: string;
  title: string;
};

const menuItems: MenuItem[] = [
  { icon: HouseIcon, ariaLabel: 'Ir para Home', title: 'Home' },
  { icon: HistoryIcon, ariaLabel: 'Ir para Histórico', title: 'Histórico' },
  {
    icon: SettingsIcon,
    ariaLabel: 'Ir para Configurações',
    title: 'Configurações',
  },
];

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme;
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); //

  return (
    <nav className={styles.menu}>
      {menuItems.map(({ icon: Icon, ariaLabel, title }) => (
        <a
          href='#'
          key={title}
          className={styles.menuLink}
          aria-label={ariaLabel}
          title={title}
        >
          <Icon />
        </a>
      ))}

      <a
        href='#'
        className={styles.menuLink}
        aria-label='Alterar tema'
        title='Tema'
        onClick={handleThemeChange}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </a>
    </nav>
  );
}
