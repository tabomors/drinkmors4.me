/** @jsx jsx */
import { jsx, SxStyleProp, SxProps } from 'theme-ui';
import React from 'react';
import Header from './Header';

const containerStyles: SxStyleProp = { maxWidth: '800px', margin: 'auto' };

interface LayoutProps {
  footerContent?: React.ReactNode;
}

interface CopyrightProps extends SxProps {
  className?: string;
}

export const Copyright: React.FC<CopyrightProps> = ({ className }) => {
  return <div className={className}>© {new Date().getFullYear()}</div>;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  footerContent = <Copyright />,
}) => {
  return (
    <>
      <Header />
      <div sx={containerStyles}>
        <main>{children}</main>
        <footer>{footerContent}</footer>
      </div>
    </>
  );
};

export default Layout;
