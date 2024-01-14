import s from './Container.module.scss';

export const Container = ({ className, children }) =>
  className ? (
    <div className={`${s.container} ${className}`}>{children}</div>
  ) : (
    <div className={s.container}>{children}</div>
  );
