import React from 'react';
import classes from './styles.module.scss';

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  const {
    background = '',
    pageClassName = '',
    pageStyle = {},
    containerClassName = '',
    containerStyle = {},
    children,
  } = props;

  return (
    <main className={`${classes.page} ${pageClassName}`} style={{ ...pageStyle, background }}>
      <section className={`${classes.contentContainer} ${containerClassName}`} style={containerStyle}>
        {children}
      </section>
    </main>
  );
};

export default ProjectPage;
