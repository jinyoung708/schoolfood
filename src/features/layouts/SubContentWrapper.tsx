interface SubContentWrapperProps {
  children: React.ReactNode;
}

export const SubContentWrapper = ({ children }: SubContentWrapperProps) => {
  return <div className="grow w-full sub_container">{children}</div>;
};
