export interface Person {
    name: string,
    age: number
}  

export const Message = ({ user }: { user: Person }) => {
    
    const isTooOld = (age: number) => {
        if (age > 25) return "You are too old"
        else return "You're on your prime, beach";
      };
    return(
        <>
        <h1>Hello {user.name} </h1>
        <h2>{isTooOld(user.age)}</h2>
        </>
        )
        
        
}