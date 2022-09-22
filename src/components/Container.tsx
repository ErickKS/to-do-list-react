interface ContainerProps {
  children: React.ReactNode;
}

export function Container({children}: ContainerProps) {
  return (
    <div className="max-w-screen-md mx-auto mt-20 px-4">
      {children}
    </div>
  )
}