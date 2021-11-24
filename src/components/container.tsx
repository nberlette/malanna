import cn from 'classnames';

export default function Container({ children, className }: { children?: any, className?: any } = {}) {
  return (
      <div className={cn("container mx-auto px-5", className)}>
        {children}
      </div>
  );
}
