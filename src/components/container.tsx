import cn from 'classnames';

export default function Container({ children }: { children?: any } = {}) {
  return (
      <div className={cn("container mx-auto px-5")}>
        {children}
      </div>
  );
}
