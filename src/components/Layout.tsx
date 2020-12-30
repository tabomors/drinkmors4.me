/** @jsx jsx */
import { jsx, SxStyleProp, SxProps } from 'theme-ui';
import React from 'react';

export const containerStyles: SxStyleProp = { maxWidth: '800px', margin: 'auto' };

interface LayoutProps {
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

interface CopyrightProps extends SxProps {
  className?: string;
}

export const Copyright: React.FC<CopyrightProps> = ({ className }) => {
  return <div className={className} sx={{ textAlign: 'right' }}>© {new Date().getFullYear()}</div>;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  footerContent = <Copyright />,
  headerContent = null
}) => {
  return (
    <>
      <header>{headerContent}</header>
      <div sx={containerStyles}>
        <main>{children}</main>
        <footer sx={{ py: 3 }}>{footerContent}</footer>
      </div>
    </>
  );
};

export default Layout;
