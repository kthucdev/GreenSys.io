// import { cn } from "@/lib/utils"

import { cn } from "@/lib/utils"

// interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: React.ReactNode
// }

// const Container = ({ children, className, ...props }: ContainerProps) => {
//   return (
//     <div 
//       className={cn(
//         "mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8",
//         className
//       )} 
//       {...props}
//     >
//       {children}
//     </div>
//   )
// }

// export default Container


interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={cn("w-full px-4 sm:px-6 lg:px-14", className)} {...props}>
        {children}
    </div>
  )
}

export default Container