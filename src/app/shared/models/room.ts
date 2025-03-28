export interface Room {
    id: string; // Guid in C# maps to string in TypeScript
    number: number;
    capacity: number;
    rent: number;
    remarks: string;
    customers: string[]; // ICollection<Guid> in C# maps to string[] in TypeScript
}


export interface RoomAddRequest {
    number: number;
    capacity: number;
    rent: number;
    remarks: string;
    customers: string[]; 
}






